import { Component } from "solid-js";
import { PatternWidth } from "~/common/patterns";

type FingerDisplayProps = {
  baseId: string;
  radius: number;
  widths: [PatternWidth, PatternWidth, PatternWidth, PatternWidth];
  disabled?: boolean;
};

export const FingerDisplay: Component<FingerDisplayProps> = function (props) {
  const oneXPos = props.widths[0];
  const twoXPos = oneXPos + props.radius + props.widths[1];
  const threeXPos = twoXPos + props.radius + props.widths[2];
  const fourXPos = threeXPos + props.radius + props.widths[3];

  /*
  function isFingerActive(num: 1 | 2 | 3 | 4) {
    return $activeFinger.props.baseId === baseId && $activeFinger.num === num;
  }

  function setActiveFinger(num: 1 | 2 | 3 | 4) {
    if (disabled) {
      return;
    }
    activeFinger.set({ props.baseId, num });
  }

          class={
            isFingerActive(1)
              ? "finger-active stroke-default finger"
              : "stroke-default finger"
          }
          onClick={setActiveFinger.bind(null, 1)}


          className={
            isFingerActive(2)
              ? "finger-active stroke-default svg-text number"
              : "stroke-default svg-text number"
          }
  */

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="100"
      viewBox="0 0 79.374999 26.458334"
      version="1.1"
      id={props.baseId + "-finger-pattern"}
    >
      <g transform="translate(0,-270.54165)">
        <path
          class="line stroke-default"
          d="M 0,283.59224 H 79.375"
          id={props.baseId + "-finger-pattern-line"}
        />
        <circle
          id={props.baseId + "-finger-1"}
          cx={oneXPos}
          cy="283.77081"
          r={props.radius}
        />
        <circle
          id={props.baseId + "-finger-2"}
          cx={twoXPos}
          cy="283.77081"
          r={props.radius}
          class="stroke-default finger"
        />
        <circle
          id={props.baseId + "-finger-3"}
          cx={threeXPos}
          cy="283.77081"
          r={props.radius}
          class="stroke-default finger"
        />
        <circle
          id={props.baseId + "-finger-4"}
          cx={fourXPos}
          cy="283.77081"
          r={props.radius}
          class="stroke-default finger"
        />
        <text
          class="stroke-default svg-text number"
          x={oneXPos - 1.2}
          y="280.45789"
          id={props.baseId + "-finger-1-text"}
          transform="scale(0.9999799,1.0000201)"
        >
          <tspan x={oneXPos - 1.2} y="280.45789">
            1
          </tspan>
        </text>
        <text
          x={twoXPos - 1.3}
          class="stroke-default svg-text number"
          y="280.45789"
          id={props.baseId + "-finger-2-text"}
          transform="scale(0.99997991,1.0000201)"
        >
          <tspan x={twoXPos - 1.3} y="280.45789">
            2
          </tspan>
        </text>
        <text
          class="stroke-default svg-text number"
          x={threeXPos - 1.4}
          y="280.41202"
          id={props.baseId + "-finger-3-text"}
          transform="scale(0.99997991,1.0000201)"
        >
          <tspan x={threeXPos - 1.4} y="280.41202">
            3
          </tspan>
        </text>
        <text
          class="stroke-default svg-text number"
          x={fourXPos - 1.5}
          y="280.45789"
          id={props.baseId + "-finger-4-text"}
          transform="scale(0.99997991,1.0000201)"
        >
          <tspan x={fourXPos - 1.5} y="280.45789">
            4
          </tspan>
        </text>
      </g>
    </svg>
  );
};
