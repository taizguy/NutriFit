const StarFill = (props: React.SVGAttributes<SVGElement>) => {
  const { width = "15", height = "14", fill = "currentColor" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.69533 0.487005L4.86449 4.10687L0.768236 4.68922C0.0336581 4.79311 -0.260734 5.67621 0.271975 6.182L3.23552 8.99806L2.53459 12.9761C2.40842 13.6951 3.18505 14.2337 3.83552 13.8975L7.5 12.0192L11.1645 13.8975C11.8149 14.231 12.5916 13.6951 12.4654 12.9761L11.7645 8.99806L14.728 6.182C15.2607 5.67621 14.9663 4.79311 14.2318 4.68922L10.1355 4.10687L8.30467 0.487005C7.97664 -0.158228 7.02617 -0.16643 6.69533 0.487005Z"
        fill={fill}
        fillOpacity="1"
      />
    </svg>
  );
};
export default StarFill;
