interface IGoalCardProp{
    title: string;
}

export function GoalCard({title} : IGoalCardProp){
    return (
        <div className="flex gap-2">
            <p> ✅ </p>
            <p> {title}</p>
        </div>
    )
}