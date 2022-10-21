import React from 'react';

function ExpericenceComponent({period, company , post, description}) {
    return (
        <div className="flex flex-row py-6 border-b-[1px] w-[90%]  border-b-[#222222]">
            <h1 className="w-3/12 text-lg">{period}</h1>
            <div className="flex flex-col w-3/12 ">
              <h1 className="text-2xl">{company}</h1>
              <h2 className="text-portfolio-light text-lg">{post}</h2>
            </div>
            <p className="w-6/12 text-lg">
              {description}
            </p>
          </div>
    );
}

export default ExpericenceComponent;