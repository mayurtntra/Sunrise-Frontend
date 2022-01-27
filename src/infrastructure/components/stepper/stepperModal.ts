export type CustomStepperProps = {
  activeStep?: any;
  alternativeLabel?: boolean;
  children?: React.ReactNode;
  classes?: object;
  connector?: React.ReactElement;
  nonLinear?: boolean;
  orientation?: 'horizontal' | 'vertical';
  getSetpContent?: any;
  optionalPageNumber?: number;
};
