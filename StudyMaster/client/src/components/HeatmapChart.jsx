import { defineComponent } from 'vue';
import './HeatmapChart.less';

export default defineComponent({
    name: 'HeatmapChart',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        const renderBars = () => {
            if (!props.data ||!Array.isArray(props.data)) return null;

            return props.data.map((item, index) => (
                <div
                    key={index}
                    class="bar"
                    style={{
                        height: `${(item.rate / 100) * 100}%`, // 调整高度计算，以适配整体图表高度
                        backgroundColor: getColor(item.rate)
                    }}
                >
                    <span class="value">{`${item.rate}%`}</span>
                    <span class="label">{item.subject}</span>
                </div>
            ));
        };

        const renderYAxis = () => {
            const yAxisLabels = ['100', '80', '60', '40', '20', '0'];
            return (
                <div class="y-axis">
                    {yAxisLabels.map((label, index) => (
                        <span key={index}>{label}</span>
                    ))}
                </div>
            );
        };

        const getColor = (rate) => {
            if (rate > 80) return'red';
            else if (rate > 60) return 'orange';
            else return 'green';
        };

        return () => (
            <div class="bar-chart">
                <div class="chart-container">
                    {renderBars()}
                </div>
                {renderYAxis()}
            </div>
        );
    }
});