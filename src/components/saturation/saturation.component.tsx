import React, { memo, useCallback, useMemo, useState } from "react";

import { useBoundingClientRect } from "@/hooks/use-bounding-client-rect";

import { ColorService, type IColor } from "@/services/color";

import { Interactive } from "../interactive";

interface ISaturationProps {
  readonly height: number;
  readonly color: IColor;
  readonly onChange: (color: IColor) => void;
}

export const Saturation = memo(({ height, color, onChange }: ISaturationProps) => {
  const [saturationRef, setSaturationRef] = useState<HTMLDivElement | null>(null);

  const { width } = useBoundingClientRect(saturationRef);

  const position = useMemo(() => {
    const x = (color.hsv.s / 100) * width;
    const y = ((100 - color.hsv.v) / 100) * height;

    return { x, y };
  }, [color.hsv.s, color.hsv.v, width, height]);

  const updateColor = useCallback(
    (x: number, y: number) => {
      const nextColor = ColorService.convert("hsv", {
        ...color.hsv,
        s: (x / width) * 100,
        v: 100 - (y / height) * 100,
      });

      onChange(nextColor);
    },
    [color.hsv, width, height, onChange]
  );

  const hsl = useMemo(() => [color.hsv.h, "100%", "50%"].join(" "), [color.hsv.h]);
  const rgb = useMemo(() => [color.rgb.r, color.rgb.g, color.rgb.b].join(" "), [color.rgb.r, color.rgb.g, color.rgb.b]);

  return (
    <Interactive onCoordinateChange={updateColor}>
      <div ref={setSaturationRef} style={{ height, backgroundColor: `hsl(${hsl})` }} className="rcp-saturation">
        <div
          style={{ left: position.x, top: position.y, backgroundColor: `rgb(${rgb})` }}
          className="rcp-saturation-cursor"
        />
      </div>
    </Interactive>
  );
});