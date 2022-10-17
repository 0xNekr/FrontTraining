import {ReactComponent as Star} from '../assets/icon-star.svg';

function RatingComponent({buttonSelected, setButtonSelected, setRate}) {

    const submitRating = () => {
        if (buttonSelected !== 0) {
            setRate(buttonSelected);
        }
    }

    return (
        <div className={'bg-background-card rounded-xl p-6 w-[340px] h-[340px]'}>
            <div className={'bg-button-rate rounded-full w-10 h-10 flex items-center justify-center mb-5'}>
                <Star/>
            </div>
            <div className={'text-title-text text-2xl mb-3 font-overpass'}>How did we do?</div>

            <div className={'text-body-text text-sm mb-5 font-overpass'}>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </div>

            <div className={'grid gap-3 grid-cols-5 content-start'}>
                <button onClick={() => setButtonSelected(1)} className={buttonSelected !== 1 ? 'bg-button-rate rounded-full w-10 h-10 text-body-text hover:bg-button-submit hover:text-title-text' : 'bg-button-selected rounded-full w-10 h-10 text-title-text'}>1</button>
                <button onClick={() => setButtonSelected(2)} className={buttonSelected !== 2 ? 'bg-button-rate rounded-full w-10 h-10 text-body-text hover:bg-button-submit hover:text-title-text' : 'bg-button-selected rounded-full w-10 h-10 text-title-text'}>2</button>
                <button onClick={() => setButtonSelected(3)} className={buttonSelected !== 3 ? 'bg-button-rate rounded-full w-10 h-10 text-body-text hover:bg-button-submit hover:text-title-text' : 'bg-button-selected rounded-full w-10 h-10 text-title-text'}>3</button>
                <button onClick={() => setButtonSelected(4)} className={buttonSelected !== 4 ? 'bg-button-rate rounded-full w-10 h-10 text-body-text hover:bg-button-submit hover:text-title-text' : 'bg-button-selected rounded-full w-10 h-10 text-title-text'}>4</button>
                <button onClick={() => setButtonSelected(5)} className={buttonSelected !== 5 ? 'bg-button-rate rounded-full w-10 h-10 text-body-text hover:bg-button-submit hover:text-title-text' : 'bg-button-selected rounded-full w-10 h-10 text-title-text'}>5</button>
            </div>

            <div className={'mt-7'}>
                <button onClick={submitRating} className={'bg-button-submit text-title-text rounded-full w-full h-8 hover:bg-title-text hover:text-button-submit'}>SUBMIT</button>
            </div>
        </div>
    );
}

export default RatingComponent;
