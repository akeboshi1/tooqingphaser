//  Value between 0 and 1. How far this animation is through, ignoring repeats and yoyos.
//  If the animation has a non-zero repeat defined, progress and totalProgress will be different
//  because progress doesn't include any repeats or repeatDelays whereas totalProgress does.
var Progress = function ()
{
    var p = this.currentFrame.progress;

    if (!this.forward)
    {
        p = 1 - p;
    }

    return p;
};

module.exports = Progress;
