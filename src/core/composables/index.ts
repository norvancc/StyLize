import {
  TComicConfig,
  TEffectType,
  TGaussianBlurConfig,
  TGrayScaleConfig,
  TLecaConfig,
  TNoiseConfig,
  TRippleConfig,
  TRmColorConfig,
  TSize,
  TTextyConfig,
} from '../types/stylize';
import { LoadGaussianBlur } from './blur';
import { LoadTexty } from './texty';
import { LoadGrayscale } from './grayscale';
import { LoadLeca } from './leca';
import { LoadMixed } from './mixed';
import { LoadRmColor } from './rmColor';
import { LoadComic } from './comic';
import { LoadRipple } from './ripple';
import { LoadNoise } from './noise';

export const EffectMap: Record<TEffectType, Function> = {
  blur: LoadGaussianBlur,
  texty: LoadTexty,
  grayscale: LoadGrayscale,
  leca: LoadLeca,
  mixed: LoadMixed,
  rmColor: LoadRmColor,
  comic: LoadComic,
  ripple: LoadRipple,
  noise: LoadNoise,
};

/**
 * load effect
 * @param effect
 * @description load effect
 */
export const loadEffect = async (effect: {
  type: TEffectType;
  data: (
    | TGaussianBlurConfig
    | TTextyConfig
    | TGrayScaleConfig
    | TLecaConfig
    | TRmColorConfig
    | TComicConfig
    | TRippleConfig
    | TNoiseConfig
  ) &
    TSize;
}): Promise<HTMLCanvasElement | false> => {
  const type = effect.type;
  if (!effect.data || !type || !EffectMap[type]) {
    return false;
  }

  const canvas = await EffectMap[type]({ ...effect.data });
  return canvas;
};
