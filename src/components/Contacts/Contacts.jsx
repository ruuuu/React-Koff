import s from "./Contacts.module.scss";


export const Contacts = () => {

   return (
      <div>
          <a className={`${s.phone} ${s.link}`} href="tel:+7(939)8391297">  {/* два класса добавили */}
            <span> +7(939)8391297 </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.48578 1.54445L5.59264 1.21074C5.95794 1.10078 6.35076 1.12746 6.69784 1.2858C7.04492 1.44415 7.32254 1.72334 7.47892 2.07131L8.25492 3.79703C8.38961 4.09641 8.42715 4.43046 8.36227 4.75227C8.2974 5.07408 8.13336 5.36749 7.89321 5.59131L6.71206 6.69188C6.55378 6.84217 6.67378 7.42788 7.25206 8.43017C7.83092 9.43303 8.27835 9.8296 8.48464 9.76788L10.0321 9.29474C10.3457 9.1988 10.6816 9.20341 10.9925 9.30794C11.3034 9.41246 11.5738 9.61166 11.7658 9.8776L12.8686 11.4062C13.0914 11.7148 13.1945 12.0939 13.1589 12.4728C13.1233 12.8518 12.9513 13.205 12.6749 13.4667L11.8223 14.2742C11.5471 14.5348 11.2077 14.7178 10.8387 14.8044C10.4696 14.891 10.0842 14.8782 9.72178 14.7673C7.93549 14.2205 6.28121 12.5976 4.73664 9.9216C3.18864 7.2416 2.60406 4.98103 3.01149 3.13417C3.09367 2.76203 3.2736 2.41853 3.53275 2.1391C3.79189 1.85966 4.12088 1.65439 4.48578 1.54445Z" fill="currentColor"/>
            </svg>
         </a>

         <ul className={s.list}>
            <li className={s.item}>
              <a className={s.link} href="#" aria-label="Ссылка ведет на группу VK">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00031 0.320068C3.75871 0.320068 0.320312 3.75847 0.320312 8.00007C0.320312 12.2417 3.75871 15.6801 8.00031 15.6801C12.2419 15.6801 15.6803 12.2417 15.6803 8.00007C15.6803 3.75847 12.2419 0.320068 8.00031 0.320068ZM10.9539 8.98487C10.9539 8.98487 11.6331 9.65527 11.8003 9.96647C11.8051 9.97287 11.8075 9.97927 11.8091 9.98247C11.8771 10.0969 11.8931 10.1857 11.8595 10.2521C11.8035 10.3625 11.6115 10.4169 11.5459 10.4217H10.3459C10.2627 10.4217 10.0883 10.4001 9.87711 10.2545C9.71471 10.1409 9.55471 9.95447 9.39871 9.77287C9.16591 9.50247 8.96431 9.26887 8.76111 9.26887C8.7353 9.26882 8.70965 9.27287 8.68511 9.28087C8.53151 9.33047 8.33471 9.54967 8.33471 10.1337C8.33471 10.3161 8.19071 10.4209 8.08911 10.4209H7.53951C7.35231 10.4209 6.37711 10.3553 5.51311 9.44407C4.45551 8.32807 3.50351 6.08967 3.49551 6.06887C3.43551 5.92407 3.55951 5.84647 3.69471 5.84647H4.90671C5.06831 5.84647 5.12111 5.94487 5.15791 6.03207C5.20111 6.13367 5.35951 6.53767 5.61951 6.99207C6.04111 7.73287 6.29951 8.03367 6.50671 8.03367C6.54556 8.03321 6.58372 8.02333 6.61791 8.00487C6.88831 7.85447 6.83791 6.89047 6.82591 6.69047C6.82591 6.65287 6.82511 6.25927 6.68671 6.07047C6.58751 5.93367 6.41871 5.88167 6.31631 5.86247C6.35776 5.80528 6.41236 5.7589 6.47551 5.72727C6.66111 5.63447 6.99551 5.62087 7.32751 5.62087H7.51231C7.87231 5.62567 7.96511 5.64887 8.09551 5.68167C8.35951 5.74487 8.36511 5.91527 8.34191 6.49847C8.33471 6.66407 8.32751 6.85127 8.32751 7.07207C8.32751 7.12007 8.32511 7.17127 8.32511 7.22567C8.31711 7.52247 8.30751 7.85927 8.51711 7.99767C8.54445 8.01481 8.57604 8.02396 8.60831 8.02407C8.68111 8.02407 8.90031 8.02407 9.49391 7.00567C9.67698 6.67788 9.83606 6.33725 9.96991 5.98647C9.98191 5.96567 10.0171 5.90167 10.0587 5.87687C10.0894 5.86122 10.1235 5.85326 10.1579 5.85367H11.5827C11.7379 5.85367 11.8443 5.87687 11.8643 5.93687C11.8995 6.03207 11.8579 6.32247 11.2075 7.20327L10.9171 7.58647C10.3275 8.35927 10.3275 8.39847 10.9539 8.98487Z" fill="currentColor"/>
                </svg>
              </a>
            </li>

            <li className={s.item}>
              <a className={s.link}  href="#" aria-label="Ссылка ведет на группу ютуб">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66634 9.99992L10.1263 7.99992L6.66634 5.99992V9.99992ZM14.373 4.77992C14.4597 5.09325 14.5197 5.51325 14.5597 6.04658C14.6063 6.57992 14.6263 7.03992 14.6263 7.43992L14.6663 7.99992C14.6663 9.45992 14.5597 10.5333 14.373 11.2199C14.2063 11.8199 13.8197 12.2066 13.2197 12.3733C12.9063 12.4599 12.333 12.5199 11.453 12.5599C10.5863 12.6066 9.79301 12.6266 9.05967 12.6266L7.99967 12.6666C5.20634 12.6666 3.46634 12.5599 2.77967 12.3733C2.17967 12.2066 1.79301 11.8199 1.62634 11.2199C1.53967 10.9066 1.47967 10.4866 1.43967 9.95325C1.39301 9.41992 1.37301 8.95992 1.37301 8.55992L1.33301 7.99992C1.33301 6.53992 1.43967 5.46659 1.62634 4.77992C1.79301 4.17992 2.17967 3.79325 2.77967 3.62659C3.09301 3.53992 3.66634 3.47992 4.54634 3.43992C5.41301 3.39325 6.20634 3.37325 6.93967 3.37325L7.99967 3.33325C10.793 3.33325 12.533 3.43992 13.2197 3.62659C13.8197 3.79325 14.2063 4.17992 14.373 4.77992Z" fill="currentColor"/>
                </svg>                  
              </a>
            </li>

            <li className={s.item}>
              <a className={s.link}  href="#" aria-label="Ссылка ведет на группу Telegram">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.287 5.906C7.509 6.23 5.953 6.9 3.621 7.916C3.243 8.066 3.044 8.214 3.026 8.358C2.996 8.601 3.301 8.697 3.716 8.828L3.891 8.883C4.299 9.016 4.849 9.171 5.134 9.177C5.394 9.183 5.683 9.077 6.002 8.857C8.181 7.386 9.306 6.643 9.376 6.627C9.426 6.615 9.496 6.601 9.542 6.643C9.589 6.684 9.584 6.763 9.579 6.784C9.549 6.913 8.352 8.025 7.733 8.601C7.54 8.781 7.403 8.908 7.375 8.937C7.31334 9.00001 7.25067 9.06202 7.187 9.123C6.807 9.489 6.523 9.763 7.202 10.211C7.529 10.427 7.791 10.604 8.052 10.782C8.336 10.976 8.62 11.169 8.988 11.411C9.081 11.471 9.171 11.536 9.258 11.598C9.589 11.834 9.888 12.046 10.255 12.012C10.469 11.992 10.69 11.792 10.802 11.192C11.067 9.775 11.588 6.706 11.708 5.441C11.7153 5.33584 11.711 5.2302 11.695 5.126C11.6856 5.04192 11.6449 4.96446 11.581 4.909C11.49 4.84619 11.3815 4.81365 11.271 4.816C10.971 4.821 10.508 4.982 8.287 5.906Z" fill="currentColor"/>
                </svg>                   
              </a>
            </li>
         </ul>
      </div>
   )
}