"use client";

import { Button } from "@/components/Button";
import type { QRRenderOptions, DotStyle } from "@/types";

interface Props {
  options: QRRenderOptions;
  onChange: (options: QRRenderOptions) => void;
}

const DOT_STYLES: { value: DotStyle; label: string }[] = [
  { value: "square", label: "Square" },
  { value: "rounded", label: "Rounded" },
  { value: "circle", label: "Circle" },
];

export function QROptions({ options, onChange }: Props) {
  function update(partial: Partial<QRRenderOptions>) {
    onChange({ ...options, ...partial });
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            Module size
          </label>
          <input
            type="number"
            min={6}
            max={20}
            value={options.moduleSize}
            onChange={(e) => update({ moduleSize: Number(e.target.value) })}
            className="input w-14 py-1.5 text-right text-sm"
          />
        </div>
        <input
          type="range"
          min={6}
          max={20}
          value={options.moduleSize}
          onChange={(e) => update({ moduleSize: Number(e.target.value) })}
          className="h-1 w-full"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            Dot size
          </label>
          <input
            type="number"
            min={40}
            max={100}
            value={Math.round(options.dotScale * 100)}
            onChange={(e) => update({ dotScale: Number(e.target.value) / 100 })}
            className="input w-14 py-1.5 text-right text-sm"
          />
        </div>
        <input
          type="range"
          min={40}
          max={100}
          value={Math.round(options.dotScale * 100)}
          onChange={(e) => update({ dotScale: Number(e.target.value) / 100 })}
          className="h-1 w-full"
        />
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          Smaller dots reveal more of the logo
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          Dot style
        </label>
        <div className="flex gap-2">
          {DOT_STYLES.map((s) => (
            <Button
              key={s.value}
              variant="secondary"
              active={options.dotStyle === s.value}
              onClick={() => update({ dotStyle: s.value })}
              className="flex-1 py-2"
            >
              {s.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
