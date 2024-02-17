interface IFInputArrowProps {
  className?: string;
}

const InputArrow = (props: IFInputArrowProps) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0L1.47031 10.2922L2.3016 10.5L1.47031 10.7078L0 21L21 10.5L0 0ZM3.39785 8.5527L2.71387 3.7648L16.1826 10.4992L2.71387 17.2335L3.39785 12.4456L11.1837 10.4992L3.39785 8.5527Z"
        fill="#9D9CA1"
      />
    </svg>
  );
};

export default InputArrow;
