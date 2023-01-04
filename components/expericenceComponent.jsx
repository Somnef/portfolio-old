import React from 'react';

function ExpericenceComponent({ period, location, company, post, description, logo }) {
	return (
		<div className="flex flex-row items-center 
						py-6 px-4 w-[100%]
						border-b-[1px] border-b-[#222222] rounded-sm
						group hover:bg-[rgb(97,132,214)] hover:shadow-[0_0_5px_3px_rgba(255,255,255,1)] ease-in-out duration-300">

			<div className="flex flex-col w-[20%] group-hover:-translate-x-2 ease-in-out duration-300">
				<h1 className="text-md group-hover:text-lg ease-in-out duration-300">
					{period}
				</h1>
				<h1 className="text-sm text-gray-300 group-hover:text-md group-hover:text-gray-100 ease-in-out duration-300">
					{location}
				</h1>
			</div>
				
			<div className="flex flex-col items-center justify-center w-[35%] group-hover:-translate-x-4 ease-in-out duration-300">
				<div className="flex flex-row items-center justify-center gap-3 mb-2">
					<img className="w-10 h-10 group-hover:w-12 group-hover:h-12 ease-in-out duration-300" src={logo} alt="logo" />
					<h1 className="text-2xl group-hover:text-3xl ease-in-out duration-300">{company}</h1>
				</div>

				<h2 className="text-portfolio-light text-lg group-hover:text-gray-200 group-hover:translate-y-2 ease-in-out duration-300">
					{post}
				</h2>
			</div>

			<p className="w-[45%] text-lg group-hover:-translate-x-4 ease-in-out duration-300">
				{description}
			</p>
		</div>
	);
}

export default ExpericenceComponent;