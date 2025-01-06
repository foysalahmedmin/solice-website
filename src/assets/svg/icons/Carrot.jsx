import { forwardRef } from "react";

const Carrot = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.75rem"
      height="2.125rem"
      viewBox="0 0 12 34"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.95065 33.6412C4.70281 33.6412 3.70843 32.2373 2.92853 30.0146H5.98965C6.12613 30.0146 6.24312 29.8976 6.24312 29.7611C6.24312 29.6247 6.12613 29.5077 5.98965 29.5077H2.75305C2.18762 27.7529 1.71968 25.5692 1.31023 23.171H5.98965C6.12613 23.171 6.24312 23.0735 6.24312 22.937C6.24312 22.8005 6.12613 22.6835 5.98965 22.6835H1.23224C0.900783 20.6558 0.60832 18.4916 0.354851 16.3468H5.98965C6.12613 16.3468 6.24312 16.2493 6.24312 16.1129C6.24312 15.9569 6.12613 15.8594 5.98965 15.8594H0.296359L0.237866 15.3719L0.120881 14.4946C-0.132588 12.3693 0.0818854 10.751 0.491334 9.52268H5.98965C6.12613 9.52268 6.24312 9.40569 6.24312 9.26921C6.24312 9.13273 6.12613 9.03524 5.98965 9.03524H0.666812C0.998271 8.25534 1.38822 7.67041 1.77817 7.22196C2.83104 6.05211 4.27386 5.40869 5.83367 5.40869C7.52995 5.40869 9.14825 6.1496 10.2986 7.45594C11.4295 8.74277 12.0144 10.4781 11.9754 12.4473H5.98965C5.85316 12.4473 5.75568 12.5448 5.75568 12.6813C5.75568 12.8178 5.85316 12.9348 5.98965 12.9348H11.9559C11.9364 13.1492 11.9169 13.3637 11.8974 13.5782C11.8389 14.0851 11.7609 14.6895 11.6829 15.3719C11.527 16.6588 11.3515 17.9846 11.176 19.2715H5.98965C5.85316 19.2715 5.75568 19.3884 5.75568 19.5249C5.75568 19.6614 5.85316 19.7589 5.98965 19.7589H11.1175C10.8055 22.0011 10.4546 24.1653 10.0451 26.0956H5.98965C5.85316 26.0956 5.75568 26.2126 5.75568 26.3491C5.75568 26.4856 5.85316 26.6025 5.98965 26.6025H9.92815C9.01177 30.7165 7.76393 33.6412 5.95065 33.6412Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.99145 6.28615C5.75748 6.28615 5.5625 6.09117 5.5625 5.8572V0.807331C5.5625 0.553862 5.75748 0.358887 5.99145 0.358887C6.24491 0.358887 6.43989 0.553862 6.43989 0.807331V5.8572C6.43989 6.09117 6.24491 6.28615 5.99145 6.28615Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.98902 6.28627H5.96952C5.71605 6.26677 5.54057 6.0718 5.56007 5.81833C5.87203 0.963436 9.55707 0.378509 9.57657 0.378509C9.83004 0.339514 10.0445 0.495495 10.0835 0.748963C10.1225 0.982934 9.94702 1.2169 9.71305 1.2559C9.57657 1.2754 6.71043 1.76284 6.43746 5.87682C6.41796 6.11079 6.22299 6.28627 5.98902 6.28627Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.9911 6.28627C5.75713 6.28627 5.56215 6.11079 5.56215 5.87682C5.28919 1.76284 2.40355 1.2754 2.28656 1.2559C2.03309 1.2169 1.87711 0.982934 1.91611 0.748963C1.9356 0.495495 2.16958 0.339514 2.40355 0.378509C2.44254 0.378509 6.12758 0.963436 6.43954 5.81833C6.45904 6.0718 6.26406 6.26677 6.03009 6.28627C6.0106 6.28627 6.0106 6.28627 5.9911 6.28627Z"
        fill="currentColor"
      />
    </svg>
  );
});
Carrot.displayName = "Carrot";

export { Carrot };
