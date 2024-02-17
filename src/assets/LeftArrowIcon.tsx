interface Props {
  onClick: () => void;
}

const LeftArrowIcon = ({ onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 17L1 9L10 1"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LeftArrowIcon;
