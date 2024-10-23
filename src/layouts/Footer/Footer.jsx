import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary300 py-[35px] mix-blend-soft-light">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center px-4">
        {/* logo */}
        <Link to="/">
          <img
            src="/footer-logo.png"
            className="h-[78px] w-[121px] md:h-[88px] md:w-[134px]"
          />
        </Link>

        {/* details */}
        <div className="mt-12 flex flex-col items-start gap-10 md:flex-row">
          {/* company && contact */}
          <div className="flex justify-between gap-10 md:justify-start md:gap-16">
            {/* company */}
            <div>
              <h3 className="font-semibold uppercase leading-[38px] text-white">
                Company
              </h3>

              <ul className="mt-5">
                <li className="text-grey300 leading-[40px]">About</li>
                <li className="text-grey300 leading-[40px]">Blog</li>
                <li className="text-grey300 leading-[40px]">Contact</li>
                <li className="text-grey300 leading-[40px]">Jobs</li>
              </ul>
            </div>

            {/* contact */}
            <div className="">
              <h3 className="font-semibold uppercase leading-[38px] text-white">
                Contact
              </h3>

              <div className="mt-4">
                {/* phone */}
                <div>
                  <p className="text-grey300 leading-[40px]">Phone</p>
                  <p className="leading-[40px] text-white">+234 708 507 3128</p>
                </div>

                {/* address */}
                <div className="">
                  <p className="text-grey300 leading-[40px]">Address</p>
                  <p className="leading-[40px] text-white">
                    16, Ogindipe Close, Upston Close
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONSUMER ADVISORY */}
          <div className="max-w-[463px]">
            <h3 className="font-semibold uppercase leading-[38px] text-white">
              CONSUMER ADVISORY
            </h3>

            <p className="mt-4 leading-[26px] text-white">
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary.
              <br /> <br />
              By using our website or product, you agree to follow our{" "}
              <span className="text-secondary">terms of service.</span>
            </p>
          </div>

          {/* get in touch */}
          <div className="md:max-w-[302px]">
            <h3 className="font-semibold uppercase leading-[38px] text-white">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <p className="text-grey300 mt-6 leading-[26px]">
                Feel free to get in touch with us vai email
              </p>

              <a
                href="mailto:hello@sleepstiq.com"
                className="block text-[24px] font-bold leading-[38px] text-white"
              >
                hello@sleepstiq.com
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="171"
                height="34"
                viewBox="0 0 171 34"
                fill="none"
              >
                <g clipPath="url(#clip0_1_38)">
                  <circle cx="16.5" cy="16.5" r="16.5" fill="#8FE2FF" />
                  <path
                    d="M20.6328 8.69207C20.3616 8.65189 19.4274 8.57153 18.3426 8.57153C16.0725 8.57153 14.5156 9.95769 14.5156 12.499V14.6887H11.9542V17.6619H14.5156V25.2858H17.5893V17.6619H20.1406L20.5323 14.6887H17.5893V12.7903C17.5893 11.9365 17.8203 11.3439 19.0558 11.3439H20.6328V8.69207Z"
                    fill="#12305B"
                  />
                  <circle cx="60.5" cy="16.5" r="16.5" fill="#8FE2FF" />
                  <path
                    d="M69.0556 12.6696C68.473 12.9207 67.8402 13.1015 67.1873 13.1718C67.8603 12.7701 68.3725 12.1372 68.6136 11.3839C67.9908 11.7555 67.2877 12.0268 66.5545 12.1674C65.9618 11.5346 65.1181 11.1428 64.1839 11.1428C62.3859 11.1428 60.9395 12.5993 60.9395 14.3872C60.9395 14.6384 60.9696 14.8895 61.0199 15.1305C58.3279 14.9899 55.9272 13.7042 54.3301 11.7355C54.0489 12.2176 53.8882 12.7701 53.8882 13.3727C53.8882 14.4977 54.4607 15.4922 55.3346 16.0747C54.8022 16.0547 54.3 15.904 53.8681 15.6629C53.8681 15.673 53.8681 15.693 53.8681 15.7031C53.8681 17.2801 54.983 18.5859 56.4696 18.8872C56.1984 18.9576 55.9071 18.9977 55.6158 18.9977C55.4049 18.9977 55.204 18.9776 55.0031 18.9475C55.415 20.2332 56.6103 21.1674 58.0366 21.1975C56.9217 22.0714 55.5254 22.5837 54.0087 22.5837C53.7375 22.5837 53.4864 22.5736 53.2252 22.5435C54.6616 23.4676 56.3692 24 58.2074 24C64.1739 24 67.4384 19.058 67.4384 14.7689C67.4384 14.6283 67.4384 14.4877 67.4283 14.3471C68.0612 13.885 68.6136 13.3125 69.0556 12.6696Z"
                    fill="#12305B"
                  />
                  <circle cx="107.5" cy="17.5" r="16.5" fill="#8FE2FF" />
                  <path
                    d="M110.934 17.7422C110.934 17.2601 110.884 16.8884 110.814 16.5168H103.863V19.048H108.041C107.871 20.1228 106.776 22.2221 103.863 22.2221C101.352 22.2221 99.3025 20.1429 99.3025 17.5715C99.3025 15 101.352 12.9208 103.863 12.9208C105.299 12.9208 106.253 13.5335 106.796 14.0558L108.795 12.1373C107.509 10.932 105.852 10.2087 103.863 10.2087C99.7946 10.2087 96.5 13.5034 96.5 17.5715C96.5 21.6395 99.7946 24.9342 103.863 24.9342C108.112 24.9342 110.934 21.9509 110.934 17.7422ZM119.643 16.5168H117.544V14.4174H115.434V16.5168H113.335V18.6262H115.434V20.7255H117.544V18.6262H119.643V16.5168Z"
                    fill="#12305B"
                  />
                  <circle cx="154.5" cy="17.5" r="16.5" fill="#8FE2FF" />
                  <path
                    d="M150.156 14.8494H146.841V24.8036H150.156V14.8494ZM150.367 11.7757C150.357 10.8014 149.654 10.0581 148.519 10.0581C147.394 10.0581 146.65 10.8014 146.65 11.7757C146.65 12.73 147.364 13.4934 148.479 13.4934H148.499C149.654 13.4934 150.377 12.73 150.367 11.7757ZM162.079 19.0983C162.079 16.0447 160.452 14.6184 158.272 14.6184C156.484 14.6184 155.701 15.6128 155.269 16.2958H155.289V14.8494H151.984C151.984 14.8494 152.024 15.7836 151.984 24.8036H155.289V19.249C155.289 18.9476 155.319 18.6563 155.399 18.4353C155.64 17.8427 156.183 17.23 157.097 17.23C158.292 17.23 158.774 18.144 158.774 19.48V24.8036H162.079V19.0983Z"
                    fill="#12305B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_38">
                    <rect width="171" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* copyright */}
            <p className="text-grey300 mt-10 text-center text-sm md:mt-[55px] md:text-left">
              © 2020@sleepstiq. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
