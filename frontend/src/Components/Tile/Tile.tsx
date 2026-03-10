
type Props = {
    title: string;
    subTitle: string;
}

const Tile = ({ title, subTitle }: Props) => {
    return (
        <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words'>
                <div className='flex-auto p-4'>
                    <div className='flex flex-wrap'>
                        <div className="relative w-full pr-4 max-w-full flex-grow">
                            <h5 className="text-blueGray-400 uppercase">
                                {title}
                            </h5>

                            <span className='font-bold text-xl'>{subTitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tile