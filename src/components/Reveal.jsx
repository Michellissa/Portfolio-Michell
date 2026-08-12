import { useInView } from "../hooks/useInView";

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const hidden = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "",
  }[direction];

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out will-change-transform ${
        inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hidden}`
      }`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
