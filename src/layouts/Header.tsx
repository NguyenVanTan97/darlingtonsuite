import { useMainContext } from "@/context/main.context";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
 ActionHeaderButton,
 BookingNowButton,
} from "../components/Button/BookingNow";

export const Header = (props: { dark?: boolean }) => {
 const { t } = useTranslation("header");
 return (
  <div className="  z-20 w-full absolute top-0  py-2 md:py-8 ">
   <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around mt-9 md:mt-0 container mx-auto px-4 w-full items-center">
    <div>
     <img className="h-[26px]" src="/images/logo.svg" alt={""} />
    </div>
    <div className="flex justify-center md:hidden mb-3 items-center">
     <BookingWrapper />
    </div>
    <div className="hidden md:flex justify-between gap-x-8 items-center ">
     <div className="flex gap-x-4 text-white text-xs md:text-sm font-semibold  uppercase">
      <Link href="/">{t("home")}</Link>
      <Link href="/about">{t("about")}</Link>
      <Link href="/booking">{t("booking")}</Link>
     </div>
     <div className="hidden md:block">
      <BookingWrapper dark={props.dark} />
     </div>
    </div>
   </div>
  </div>
 );
};

function BookingWrapper(props: { className?: string; dark?: boolean }) {
 const { t } = useTranslation("header");
 const { language, setLanguage } = useMainContext();
 const { i18n } = useTranslation();

 const changelanguage = () => {
  if (language === "VN") {
   setLanguage("Eng");
   i18n.changeLanguage("Eng");
  } else {
   setLanguage("VN");
   i18n.changeLanguage("VN");
  }
 };

 return (
  <div
   className={`flex flex-col-reverse md:flex-row gap-x-4 gap-y-2.5 md:gap-y-0 items-center ${props.className}`}
  >
   <div className="flex gap-x-2 items-center">
    <PhoneIcon />
    <a
     href="tel:0938294338"
     className="text-white text-xs md:text-sm font-bold"
    >
     0938 - 294 - 338
    </a>
   </div>
   <div className="flex gap-2">
    <BookingNowButton color={props.dark ? "secondary" : undefined} />
    <ActionHeaderButton
     title={language}
     className="normal-case"
     color={props.dark ? "secondary" : undefined}
     onClick={changelanguage}
    />
    <ActionHeaderButton
     title={<MoreMenuIcon />}
     className="normal-case block md:hidden"
     color={props.dark ? "secondary" : undefined}
    />
   </div>
  </div>
 );
}

function PhoneIcon() {
 return (
  <svg
   className="w-3 h-3 md:w-[18px] md:h-[18px]"
   viewBox="0 0 18 18"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path
    d="M11.1765 3.14169C10.7481 3.06255 10.3547 3.33593 10.2731 3.75409C10.1916 4.17226 10.4658 4.58053 10.8826 4.66237C12.1373 4.90697 13.1061 5.87819 13.3516 7.13718V7.13808C13.4215 7.50049 13.7406 7.76398 14.108 7.76398C14.1573 7.76398 14.2066 7.75948 14.2568 7.75049C14.6735 7.66686 14.9478 7.25949 14.8662 6.84042C14.4997 4.96003 13.0523 3.50769 11.1765 3.14169Z"
    fill="white"
   />
   <path
    d="M11.1208 0.0082346C10.92 -0.0205423 10.7184 0.0388101 10.5579 0.166508C10.393 0.296004 10.29 0.483054 10.2676 0.692586C10.2201 1.11615 10.5257 1.49924 10.9487 1.5469C13.8658 1.87244 16.1332 4.14492 16.4613 7.07117C16.5052 7.46326 16.8341 7.75912 17.2266 7.75912C17.2562 7.75912 17.2849 7.75732 17.3145 7.75373C17.5197 7.73125 17.7025 7.62963 17.8316 7.46776C17.9597 7.30589 18.018 7.10445 17.9947 6.89851C17.586 3.24744 14.7603 0.41381 11.1208 0.0082346Z"
    fill="white"
   />
   <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8.12764 9.875C11.7174 13.4638 12.5318 9.31196 14.8174 11.596C17.0209 13.7989 18.2874 14.2402 15.4955 17.0313C15.1458 17.3123 12.924 20.6934 5.11556 12.8872C-2.69382 5.08 0.685348 2.85585 0.966462 2.50625C3.76505 -0.292523 4.1988 0.981314 6.40231 3.18421C8.68793 5.4692 4.53787 6.28623 8.12764 9.875Z"
    fill="white"
   />
  </svg>
 );
}

function MoreMenuIcon() {
 return (
  <svg
   width="20"
   height="12"
   viewBox="0 0 21 14"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path
    d="M1.76271 10.485H18.1991C18.3849 10.4876 18.5681 10.5291 18.7368 10.6069C18.9055 10.6848 19.056 10.7972 19.1786 10.9369C19.3011 11.0765 19.393 11.2404 19.4482 11.4178C19.5034 11.5952 19.5207 11.7823 19.4991 11.9668C19.4612 12.2923 19.305 12.5925 19.0604 12.8103C18.8157 13.0282 18.4994 13.1486 18.1718 13.1487H1.76271C1.57495 13.1474 1.38957 13.1065 1.21865 13.0288C1.04773 12.9511 0.895119 12.8382 0.770749 12.6975C0.646379 12.5568 0.55305 12.3915 0.49684 12.2124C0.44063 12.0332 0.422797 11.8442 0.444516 11.6577C0.480461 11.3339 0.635069 11.0349 0.87849 10.8183C1.12191 10.6018 1.43691 10.483 1.76271 10.485Z"
    fill="white"
   />
   <path
    d="M20.0813 7.18498C20.0434 7.51042 19.8873 7.8106 19.6426 8.02848C19.3979 8.24637 19.0816 8.36676 18.754 8.36679H2.31764C2.12997 8.36662 1.94443 8.32695 1.77312 8.25032C1.60181 8.17369 1.44856 8.06182 1.32335 7.92203C1.19814 7.78224 1.10378 7.61765 1.0464 7.43897C0.98903 7.26028 0.969935 7.07152 0.990362 6.88496C1.03014 6.5603 1.18682 6.26125 1.4311 6.04373C1.67539 5.82622 1.99056 5.70515 2.31764 5.70316H18.754C18.9421 5.70188 19.1283 5.74059 19.3003 5.81674C19.4723 5.89289 19.6262 6.00471 19.7517 6.14483C19.8772 6.28495 19.9715 6.45016 20.0283 6.62948C20.0851 6.80879 20.1032 6.99815 20.0813 7.18498Z"
    fill="white"
   />
   <path
    d="M20.6361 2.41231C20.5943 2.73532 20.4367 3.03219 20.1926 3.24785C19.9485 3.46351 19.6345 3.58331 19.3088 3.58502H2.87244C2.68434 3.5863 2.49812 3.54758 2.32611 3.47144C2.15411 3.39529 2.00025 3.28346 1.87474 3.14334C1.74924 3.00323 1.65495 2.83802 1.59813 2.6587C1.54131 2.47938 1.52326 2.29002 1.54517 2.10319C1.58494 1.77853 1.74162 1.47948 1.98591 1.26196C2.2302 1.04445 2.54536 0.923379 2.87244 0.921387H19.3088C19.4973 0.921404 19.6837 0.961317 19.8557 1.03849C20.0277 1.11566 20.1815 1.22835 20.3068 1.36916C20.4322 1.50997 20.5263 1.67572 20.5831 1.8555C20.6398 2.03528 20.6579 2.22505 20.6361 2.41231Z"
    fill="white"
   />
  </svg>
 );
}
