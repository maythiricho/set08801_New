function identifyAngleType(angle)
{ // body start
    if(angle>=0 && angle <90)
    {
        alert(`${angle} is acute angle.`);
    }
    else if(angle==90)
    {
        alert(`${angle} is right angle.`);
    }
    else if(angle>90 && angle<180)
    {
        alert(`${angle} is obtuse angle.`);
    }
    else if(angle==180)
    {
        alert(`${angle} is straight angle.`);
    }

}// body end
identifyAngleType(180)
identifyAngleType(45)
identifyAngleType(120)