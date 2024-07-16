import PropTypes from "prop-types";
import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts";

type CardInfo = {
    title: string;
    value: string;
    text: string;
};

type AreaCardProps = {
    colors: string[];
    percentFillValue: number;
    cardInfo: CardInfo;
};

const AreaCard: React.FC<AreaCardProps> = ({ colors, percentFillValue, cardInfo }) => {
    const filledValue = (percentFillValue / 100) * 360; // 360 degrees for a full circle
    const remainedValue = 360 - filledValue;

    const data = [
        { name: "Remained", value: remainedValue },
        { name: "Achieved Sales", value: filledValue },
    ];

    const renderTooltipContent = (value: number) => {
        return `${(value / 360) * 100} %`;
    };

    return (
        <div className="area-card">
            <div className="area-card-info">
                <h5 className="info-title">{cardInfo.title}</h5>
                <div className="info-value">{cardInfo.value}</div>
                <p className="info-text">{cardInfo.text}</p>
            </div>
            <div className="area-card-chart">
                <PieChart width={100} height={100}>
                    <Pie
                        data={data}
                        cx={50}
                        cy={45}
                        innerRadius={20}
                        fill="#e4e8ef"
                        paddingAngle={0}
                        dataKey="value"
                        startAngle={-270}
                        endAngle={90}
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip formatter={renderTooltipContent} />
                </PieChart>
            </div>
        </div>
    );
};

export default AreaCard;

AreaCard.propTypes = {
    colors: PropTypes.array.isRequired,
    percentFillValue: PropTypes.number.isRequired,
    cardInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};
