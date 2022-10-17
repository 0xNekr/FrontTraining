import {ReactComponent as DividerDesktop} from '../assets/pattern-divider-desktop.svg';
import {ReactComponent as IconDice} from '../assets/icon-dice.svg';
import {ReactComponent as DividerMobile} from '../assets/pattern-divider-mobile.svg';
import {useEffect, useState} from "react";

function CardComponent() {

    const [advice, setAdvice] = useState('');
    const [id, setId] = useState(0);

    // call https://api.adviceslip.com/advice to get advice
    // https://api.adviceslip.com/advice
    const getAdvice = async () => {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data['slip']['advice']);
        setId(data['slip'].id);
    }

    useEffect(() => {
        getAdvice().then();
    }, []);

    return (
        <div className={'bg-dark-grayish-blue rounded-xl p-6 md:max-w-sm md:w-auto w-[340px]'}>
            <div className={'font-manrope text-neon-green flex items-center justify-center mt-3 text-[8px] tracking-[3px]'}>
                ADVICE #{id}
            </div>

            <div className={'font-manrope text-light-cyan text-xl text-center mt-5'}>
                “{advice}”
            </div>

            <div className={'mt-10 mb-6'}>
                {
                    window.innerWidth > 768 ?
                        <DividerDesktop className={'h-full w-full'} viewBox={'0 0 444 16'}/>
                        :
                        <DividerMobile className={'h-full w-full'} viewBox={'0 0 295 16'}/>
                }
            </div>
            <button onClick={getAdvice} className={'bg-neon-green h-10 w-10 rounded-full absolute ml-auto mr-auto inset-x-0 hover:shadow-[0px_0px_15px] hover:shadow-neon-green'}>
                <IconDice className={'h-4 w-4 flex ml-auto mr-auto'} viewBox={'0 0 24 24'}/>
            </button>
        </div>
    );
}

export default CardComponent;
