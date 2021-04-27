// @Libs
import React, { memo } from 'react';
import { Tooltip } from 'antd';
import cn from 'classnames';
// @Icons
import QuestionCircleOutlined from '@ant-design/icons/lib/icons/QuestionCircleOutlined';
// @Types
import { Props } from './LabelWithTooltip.types';

const LabelWithTooltipComponent = ({ render, documentation, className }: Props) => (
  <span className={cn('label-with-tooltip', className)}>
    {render}&nbsp;
    <Tooltip title={documentation}>
      <QuestionCircleOutlined />
    </Tooltip>
  </span>
);

LabelWithTooltipComponent.displayName = 'LabelWithTooltip';

export const LabelWithTooltip = memo(LabelWithTooltipComponent);
