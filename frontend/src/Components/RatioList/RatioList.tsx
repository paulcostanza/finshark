import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

type Props = {
    config: any;
    data: any;
}

const RatioList = ({ config, data }: Props) => {
    const renderedRows = config.map((row: { subTitle: any; render: (arg0: any) => string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
        return (
            <li className='py-3 sm:py-4'>
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate"></p>
                        <p className="text-sm text-gray-500 trauncate">
                            {row.subTitle && row.subTitle}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    })
    return (
        <div className='bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 h-full'>
            <ul className='divide-y divided-gray-200'>{renderedRows}</ul>
        </div>
    )
}

export default RatioList