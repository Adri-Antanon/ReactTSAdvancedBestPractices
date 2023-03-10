import { FC, ReactNode, useId, ComponentProps } from 'react';
import { Checkbox } from './checkbox';
import { Label } from './label';

type CheckboxProps = ComponentProps<typeof Checkbox>;

type Props = CheckboxProps;

export const LabeledCheckbox: FC<Props> = ({ children, id, ...props }) => {
  const internalId = useId();

  return (
    <div className="form-check">
      <Checkbox id={id ?? internalId} {...props} />
      <Label htmlFor={id ?? internalId}>{children}</Label>
    </div>
  );
};
