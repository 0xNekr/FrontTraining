import {ReactComponent as ThankYouIcon} from '../assets/illustration-thank-you.svg';

function ThankYouComponent({rate}) {

    return (
        <div className={'bg-background-card rounded-xl p-6 w-[340px] h-[340px]'}>
            <div className={'flex items-center justify-center'}>
                <ThankYouIcon className={'h-28 w-28'} viewBox={'0 0 162 108'}/>
            </div>
            <div className={'bg-button-rate text-button-submit rounded-full h-7 w-48 ml-auto mr-auto flex items-center justify-center'}>
                You selected {rate} out of 5
            </div>

            <div className={'text-title-text flex items-center justify-center mt-8 text-2xl font-overpass'}>Thank you!</div>

            <div className={'text-body-text text-center font-overpass text-sm mb-3 mt-3'}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</div>
        </div>
    );
}

export default ThankYouComponent;
