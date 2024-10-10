type Props = {}

function BrushIcon({ }: Props) {
    return (
        <div className="bg-[#F3E2FE] p-3 rounded-full w-10 h-10 flex items-center justify-center"> 
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75002 8.33337C7.58335 11.4584 5.41669 11.9792 2.16669 12.5L10.8334 22.9167C13 21.875 17.3334 17.7084 17.3334 15.625M15.7084 18.2292L4.87502 15.625M19.9009 2.73974L15.1667 7.29182L13.4442 5.63557C13.0382 5.24755 12.4891 5.02975 11.9167 5.02975C11.3443 5.02975 10.7951 5.24755 10.3892 5.63557L8.66669 7.29182L18.4167 16.6668L20.1392 15.0106C20.5427 14.6202 20.7692 14.0922 20.7692 13.5418C20.7692 12.9914 20.5427 12.4634 20.1392 12.0731L18.4167 10.4168L23.1509 5.86474C23.5818 5.45034 23.824 4.88829 23.824 4.30224C23.824 3.71619 23.5818 3.15414 23.1509 2.73974C22.7199 2.32534 22.1353 2.09253 21.5259 2.09253C20.9164 2.09253 20.3318 2.32534 19.9009 2.73974Z" stroke="url(#paint0_linear_228_3193)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_228_3193" x1="12.9953" y1="2.09253" x2="12.9953" y2="22.9167" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6B2C9D" />
                        <stop offset="1" stop-color="#BB2EC0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default BrushIcon;
