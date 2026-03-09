import { FC } from "react";
import { asImageSrc, Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";
import { ButtonLink } from "@/app/components/ButtonLink";
import { WideLogo } from "./WideLogo";
import { TallLogo } from "./TailLogo";
import { InteractiveSkateboard } from "./InteractiveSkateboard";

const DEFAULT_DECK_TEXTURE = '/skateboard/Deck.webp';
const DEFAULT_WHEEL_TEXTURE = '/skateboard/SkateWheel1.png';
const DEFAULT_TRUCK_COLOR = '#6F6E6A';
const DEFAULT_BOLT_COLOR = '#6F6E6A';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  const deckTextureURL = asImageSrc(slice.primary.skateboard_deck_texture) || DEFAULT_DECK_TEXTURE;
  const WheelTextureURL = asImageSrc(slice.primary.skateboard_wheel_texture) || DEFAULT_WHEEL_TEXTURE;
  const truckColor = slice.primary.skateboard_truck_color || DEFAULT_TRUCK_COLOR;
  const boltColor = slice.primary.skateboard_bolt_color || DEFAULT_BOLT_COLOR;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>

      <div className="absolute inset-0 mx-auto grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 pt-32 pb-10 sm:pt-36 lg:px-16">        <Heading size="lg" className="relatve max-w-2xl place-self-start font-extrabold">
        <PrismicText field={slice.primary.heading} />
      </Heading>
        <div className="flex relative w-full flex-col items-center justify-between gap-[clamp(0.5rem,4vw,1rem)] lg:flex-row">
          <div className="max-w-[45ch] font-semibold sm:text-lg text-xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink field={slice.primary.button} icon="skateboard" size="lg" className="z-20 mt-2 block">
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>

      <InteractiveSkateboard
        deckTextureURL={deckTextureURL}
        wheelTextureURL={WheelTextureURL}
        truckColor={truckColor}
        boltColor={boltColor}
      />
    </Bounded >
  );
};

export default Hero;
