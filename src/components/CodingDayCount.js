import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%');
};

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal);
};

export const CodingDayCount = ({total, home, out, goal}) => (
    <div className="coding-day-count">
      <div className="total-days">
        <span>{total}</span>
        <span>days</span>
      </div>
      <div className="home-days">
        <span>{home}</span>
        <span>days</span>
      </div>
      <div className="out-days">
        <span>{out}</span>
        <span>days</span>
      </div>
      <div>
        <span>{calcGoalProgress(total, goal)}</span>
      </div>
    </div>
)
