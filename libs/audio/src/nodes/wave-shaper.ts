import {Directive, Inject, OnDestroy, SkipSelf} from '@angular/core';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';

@Directive({
    selector: '[waWaveShaperNode]',
    exportAs: 'AudioNode',
    inputs: [
        'oversample',
        'curve',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WebAudioWaveShaper)],
})
export class WebAudioWaveShaper extends WaveShaperNode implements OnDestroy {
    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
    ) {
        if (modern) {
            super(context);
            connect(node, this);
        } else {
            const result = context.createWaveShaper() as WebAudioWaveShaper;

            Object.setPrototypeOf(result, WebAudioWaveShaper.prototype);
            connect(node, result);

            return result;
        }
    }

    ngOnDestroy() {
        this.disconnect();
    }
}
