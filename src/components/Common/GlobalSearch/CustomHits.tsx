import Image from "next/image";
import Link from "next/link";

function CustomHits(props: any) {
	const { hit, setSearchModalOpen } = props;
	return (
		<>
			<div className='dark:border-strokedark border-t border-stroke bg-black first-of-type:border-0'>
				<div className='bg-white px-[22px] py-3.5 duration-300 hover:bg-[#F9FAFB] dark:bg-black dark:hover:bg-slate-800'>
					<Link
						onClick={() => setSearchModalOpen(false)}
						href={hit?.objectID || hit?.url}
						className='flex cursor-pointer items-center gap-4'
					>
						{hit?.imageURL?.length > 1 && (
							<div
								className={`relative h-[60px] w-[106px] overflow-hidden rounded-lg `}
							>
								<Image
									src={hit.imageURL}
									alt={hit.name}
									layout='fill'
									objectFit='cover'
									objectPosition='center'
									quality={100}
								/>
							</div>
						)}
						<div className='w-full'>
							<h3 className='text-base font-medium text-black dark:text-gray-400'>
							</h3>
							<div className='text-body-color flex text-sm'>
								<div>
								</div>
								<div>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
export default CustomHits;
