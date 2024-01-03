const Location = (props: React.SVGAttributes<SVGElement>) => {
  const { width = "26", height = "30", fill = "currentColor" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 25C10.3838 25.0016 10.2706 24.9627 10.18 24.89C9.80998 24.58 0.999979 17.29 0.999979 9.41C0.977902 8.16055 1.20922 6.91958 1.67998 5.76199C2.15074 4.6044 2.85117 3.55421 3.739 2.67479C4.62683 1.79537 5.68365 1.10497 6.84566 0.645248C8.00768 0.18553 9.25079 -0.0339689 10.5 4.02099e-07C11.7492 -0.0339689 12.9923 0.18553 14.1543 0.645248C15.3163 1.10497 16.3731 1.79537 17.261 2.67479C18.1488 3.55421 18.8492 4.6044 19.32 5.76199C19.7907 6.91958 20.0221 8.16055 20 9.41C20 16.51 11.21 24.53 10.83 24.87C10.7396 24.9522 10.6222 24.9984 10.5 25ZM10.5 1C9.37951 0.955665 8.26189 1.14218 7.21653 1.54795C6.17118 1.95372 5.22042 2.57009 4.4233 3.35877C3.62617 4.14745 2.99972 5.0916 2.58285 6.13257C2.16597 7.17355 1.96757 8.28912 1.99998 9.41C1.99998 15.99 8.87998 22.41 10.48 23.83C12.07 22.31 19 15.33 19 9.41C19.0324 8.28912 18.834 7.17355 18.4171 6.13257C18.0002 5.0916 17.3738 4.14745 16.5767 3.35877C15.7795 2.57009 14.8288 1.95372 13.7834 1.54795C12.7381 1.14218 11.6204 0.955665 10.5 1ZM10.5 14C9.60996 14 8.73993 13.7361 7.99991 13.2416C7.25989 12.7471 6.68312 12.0443 6.34252 11.2221C6.00193 10.3998 5.91281 9.49501 6.08644 8.62209C6.26008 7.74918 6.68866 6.94736 7.318 6.31802C7.94734 5.68868 8.74916 5.2601 9.62207 5.08647C10.495 4.91283 11.3998 5.00195 12.2221 5.34254C13.0443 5.68314 13.7471 6.25991 14.2416 6.99993C14.7361 7.73996 15 8.60998 15 9.5C15 10.6935 14.5259 11.8381 13.682 12.682C12.838 13.5259 11.6935 14 10.5 14ZM10.5 6C9.80774 6 9.13105 6.20527 8.55548 6.58986C7.97991 6.97444 7.53131 7.52107 7.2664 8.16061C7.00149 8.80015 6.93218 9.50388 7.06723 10.1828C7.20228 10.8617 7.53562 11.4854 8.02511 11.9749C8.51459 12.4644 9.13823 12.7977 9.81716 12.9327C10.4961 13.0678 11.1998 12.9985 11.8394 12.7336C12.4789 12.4687 13.0255 12.0201 13.4101 11.4445C13.7947 10.8689 14 10.1922 14 9.5C14 8.57174 13.6312 7.6815 12.9749 7.02513C12.3185 6.36875 11.4282 6 10.5 6Z"
        fill={fill}
      />
    </svg>
  );
};
export default Location;
