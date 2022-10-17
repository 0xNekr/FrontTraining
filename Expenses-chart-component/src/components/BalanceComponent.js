import {ReactComponent as Logo} from "../assets/logo.svg";

function BalanceComponent() {

    return (
        <div className={'bg-soft-red rounded-lg h-20 sm:w-3/12 w-10/12 p-4 absolute top-[40px]'}>
            <div className={'font-sans text-[12px] text-very-pale-orange'}>My balance</div>
            <div className={'font-sans text-[20px] font-bold text-very-pale-orange'}>$921.48</div>
            <Logo className={'w-[45px] absolute mt-auto mb-auto inset-y-0 right-5'} viewBox={'0 0 72 48'}/>
        </div>
    );
}

export default BalanceComponent;
