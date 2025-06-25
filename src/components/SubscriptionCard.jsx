import React from 'react';
import { Link } from 'react-router';
import { FaMoneyBillWave, FaRedoAlt } from 'react-icons/fa';

const SubscriptionCard = ({ box }) => {
    const {
        name,
        thumbnail,
        frequency,
        price,
        description,
        tech_category,
    } = box;

    return (
        <div className="card bg-[#f0f6ff] shadow-lg border border-[#dceaff] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
            <figure className="bg-[#e1f0ff]">
                <img
                    src={thumbnail}
                    alt={name}
                    className="object-cover h-40 w-full m-3 rounded-2xl"
                />
            </figure>

            <div className="card-body text-neutral p-4 space-y-2">
                <h2 className="card-title text-lg font-bold text-[#1e3a8a] mb-1">
                    {name}
                    <div className="badge bg-[#60a5fa] text-white ml-2">NEW</div>
                </h2>
                <p className="text-sm text-[#334155] line-clamp-2">{description}</p>

                <div className="flex flex-wrap gap-1">
                    <div className="badge badge-outline border-[#3b82f6] text-[#1e40af]">
                        {tech_category}
                    </div>
                </div>

                <div className="text-sm space-y-1">
                    <p className="flex items-center gap-2">
                        <FaMoneyBillWave className="text-green-600" />
                        <span className="font-medium text-[#2563eb]">৳{price}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaRedoAlt className="text-blue-600" />
                        <span className="font-medium text-[#2563eb]">{frequency}</span>
                    </p>
                </div>

                <div className="card-actions justify-end mt-2">
                    <Link
                        to={`/boxes/${box.id}`}
                        className="btn btn-sm bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                    >
                        View More
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default SubscriptionCard;
