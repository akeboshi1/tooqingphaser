
var Class = require('../utils/Class');
var Components = require('../animation/frame/');

var Animation = new Class({

    initialize:

    function Animation (parent)
    {
        //  Sprite / Game Object
        this.parent = parent;

        this.animationManager = parent.state.sys.anims;

        this.mainloop = parent.state.game.mainloop;

        this.isPlaying = false;

        //  Reference to the Phaser.Animation object
        this.currentAnim = null;

        //  Reference to the Phaser.AnimationFrame object
        this.currentFrame = null;

        //  Animation specific values
        //  -------------------------

        //  Scale the time (make it go faster / slower)
        this.timeScale = 1;

        //  The frame rate of playback in frames per second (default 24 if duration is null)
        this.frameRate = 0;

        //  How long the animation should play for. If framerate is set it overrides this value
        //  otherwise framerate is derived from duration
        this.duration = 0;

        //  ms per frame (without including frame specific modifiers)
        this.msPerFrame = 0;

        //  Skip frames if the time lags, or always advanced anyway?
        this.skipMissedFrames = true;

        //  Delay before starting playback (in seconds)
        this.delay = 0;

        //  Number of times to repeat the animation (-1 for infinity)
        this.repeat = 0;

        //  Delay before the repeat starts (in seconds)
        this.repeatDelay = 0;

        //  Should the animation yoyo? (reverse back down to the start) before repeating?
        this.yoyo = false;

        //  Playhead values
        //  ---------------

        //  Move the playhead forward (true) or in reverse (false)
        this.forward = true;

        this.accumulator = 0;

        this.prevTick = 0;
        this.nextTick = 0;

        this.repeatCounter = 0;

        this.pendingRepeat = false;

        this._paused = false;
        this._wasPlaying = false;
    },

    delayedPlay: Components.DelayedPlay,
    load: Components.Load,
    pause: Components.Pause,
    paused: Components.Paused,
    play: Components.Play,
    progress: Components.Progress,
    restart: Components.Restart,
    resume: Components.Resume,
    stop: Components.Stop,
    totalFrames: Components.TotalFrames,
    totalProgress: Components.TotalProgress,
    update: Components.Update,
    updateFrame: Components.UpdateFrame,
    yoyo: Components.Yoyo

});

module.exports = Animation;
