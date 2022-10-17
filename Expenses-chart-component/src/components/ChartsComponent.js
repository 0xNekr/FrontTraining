import data from '../assets/data.json';
import {useEffect, useState} from "react";


function ChartsComponent() {

    const [today, setToday] = useState('');

    const dayByID = {
        0: 'mon',
        1: 'tue',
        2: 'wed',
        3: 'thu',
        4: 'fri',
        5: 'sat',
        6: 'sun'
    }

    useEffect(() => {
        let now = new Date();
        console.log(dayByID[now.getDay()])
        setToday(dayByID[now.getDay()]);
    }, [])

    return (
        <div className={'bg-very-pale-orange rounded-lg h-3/4 max-h-[480px] sm:w-3/12 w-10/12 absolute p-4 mt-3 top-[120px]'}>
            <div className={'font-sans font-bold text-[22px] sm:text-[30px] p-3'}>Spending - Last 7 days</div>

            <div className={'flex flex-grow w-full h-2/4 sm:h-2/4 mt-2 space-x-2 sm:space-x-3'}>
                {
                    Object.keys(data).map((key) => {
                        return (
                            <div key={key} className={'relative flex flex-col items-center flex-grow pb-5 group'}>
                                {
                                    data[key].day === today ?
                                        <div style={{height: `${data[key].amount + 20}%`}} className={'absolute bottom-5 flex justify-center w-8 sm:w-11 rounded-sm bg-cyan'}>
                                            <span className={'absolute -top-12 hidden bg-dark-brown p-1 sm:p-2 rounded-sm text-very-pale-orange text-sm font-sans font-bold group-hover:block'}>${data[key].amount}</span>
                                        </div>
                                        :
                                        <div style={{height: `${data[key].amount + 20}%`}} className={'absolute bottom-5 flex justify-center w-8 sm:w-11 rounded-sm bg-soft-red'}>
                                            <span className={'absolute -top-12 hidden bg-dark-brown p-1 sm:p-2 rounded-sm text-very-pale-orange text-sm font-sans font-bold group-hover:block'}>${data[key].amount}</span>
                                        </div>
                                }
                                <span className={'absolute bottom-0 text-[12px] text-medium-brown'}>{data[key].day}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className={'border-b-[2px] border-cream mt-5'}/>
            <div className={'relative'}>
                <div className={'absolute left-0 top-5 text-medium-brown'}>Total this month</div>
                <div className={'absolute left-0 top-10 text-dark-brown font-bold text-4xl'}>$478.33</div>
                <div className={'absolute right-0 top-10 text-dark-brown font-bold'}>+2.4%</div>
                <div className={'absolute right-0 top-16 text-medium-brown'}>from last month</div>
            </div>

        </div>
    );
}

export default ChartsComponent;
