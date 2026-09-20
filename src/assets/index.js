// Each asset is imported under a `Raw` name and unwrapped to its `.src`
// string below, matching Vite's import behavior (a plain URL string) instead
// of Next.js's default StaticImageData object ({ src, width, height }). This
// is the one place that fix needs to happen — every component and constants
// file downstream still just receives a plain string exactly as before.
import logoRaw from "./logo.svg";
import logoBracketsLightRaw from "./logoBracketsLight.png";
import githubRaw from "./github.svg";
import linkedinRaw from "./linkedin.svg";
import resumeRaw from "./resume.svg";
import emailRaw from "./email.svg";
import email2Raw from "./email2.svg";
import menuRaw from "./menu.svg";
import closeRaw from "./close.svg";

import singleStarPurpleRaw from "./singleStarPurple.png";
import singleStarLightTealRaw from "./singleStarLightTeal.png";
import singleStarLilacRaw from "./singleStarLilac.png";
import threeStarsRaw from "./threeStars.png";
import starrySky1Raw from "./starrySky1.svg";
import starrySky2Raw from "./starrySky2.svg";
import mountainRaw from "./mountain.svg";
import planet1Raw from "./planet1.png";
import planet2Raw from "./planet2.png";
import rocketRaw from "./rocket.png";
import astronautMoonRaw from "./astronaut-moon.png";

import photo1Raw from "./photos/photo1.png";
import photo2Raw from "./photos/photo2.jpeg";
import photo3Raw from "./photos/photo3.jpeg";
import photo4Raw from "./photos/photo4.jpeg";

import typescriptRaw from "./tech/typescript.svg";
import javascriptRaw from "./tech/javascript.png";
import htmlRaw from "./tech/html.svg";
import cssRaw from "./tech/css.svg";
import reactRaw from "./tech/react.png";
import nextRaw from "./tech/next.svg";
import reactRouterRaw from "./tech/reactRouter.svg";
import tailwindRaw from "./tech/tailwind.svg";
import bootstrapRaw from "./tech/bootstrap.svg";
import muiRaw from "./tech/mui.png";
import framerMotionRaw from "./tech/framerMotion.svg";
import viteRaw from "./tech/vite.svg";
import nodeRaw from "./tech/node.svg";
import wordpressRaw from "./tech/wordpress.png";
import phpRaw from "./tech/php.png";
import expressRaw from "./tech/express.svg";
import mongodbRaw from "./tech/mongodb.svg";
import postgresqlRaw from "./tech/postgresql.png";
import supabaseRaw from "./tech/supabase.svg";
import jestRaw from "./tech/jest.svg";
import playwrightRaw from "./tech/playwright.svg";
import testingLibraryRaw from "./tech/testingLibrary.svg";
import gitRaw from "./tech/git.svg";
import figmaRaw from "./tech/figma.png";
import canvaRaw from "./tech/canva.png";
import photoshopRaw from "./tech/photoshop.png";

import lifeGoatsRaw from "./projects/lifeGoats.png";
// portfolio.png was removed when the Portfolio Website project was commented
// out in constants/projects.js — keep this commented alongside it, not
// deleted, since the project entry may come back.
// import portfolioRaw from "./projects/portfolio.png";
import gardenGenieRaw from "./projects/gardenGenie.png";
import lightABeaconRaw from "./projects/lightABeacon.png";
import goldenKeysRaw from "./projects/GoldenKeys.png";
import greekArtMapRaw from "./projects/greekArtMap.png";

import lifeGoats1Raw from "./life-goats/life-goats-1.webp";
import lifeGoats2Raw from "./life-goats/life-goats-2.jpg";
import lifeGoats3Raw from "./life-goats/life-goats-3.jpeg";

export const logo = logoRaw.src;
export const logoBracketsLight = logoBracketsLightRaw.src;
export const github = githubRaw.src;
export const linkedin = linkedinRaw.src;
export const resume = resumeRaw.src;
export const email = emailRaw.src;
export const email2 = email2Raw.src;
export const menu = menuRaw.src;
export const close = closeRaw.src;
export const singleStarPurple = singleStarPurpleRaw.src;
export const singleStarLightTeal = singleStarLightTealRaw.src;
export const singleStarLilac = singleStarLilacRaw.src;
export const threeStars = threeStarsRaw.src;
export const starrySky1 = starrySky1Raw.src;
export const starrySky2 = starrySky2Raw.src;
export const mountain = mountainRaw.src;
export const planet1 = planet1Raw.src;
export const planet2 = planet2Raw.src;
export const rocket = rocketRaw.src;
export const astronautMoon = astronautMoonRaw.src;
export const photo1 = photo1Raw.src;
export const photo2 = photo2Raw.src;
export const photo3 = photo3Raw.src;
export const photo4 = photo4Raw.src;
export const typescript = typescriptRaw.src;
export const javascript = javascriptRaw.src;
export const html = htmlRaw.src;
export const css = cssRaw.src;
export const react = reactRaw.src;
export const next = nextRaw.src;
export const reactRouter = reactRouterRaw.src;
export const tailwind = tailwindRaw.src;
export const bootstrap = bootstrapRaw.src;
export const mui = muiRaw.src;
export const framerMotion = framerMotionRaw.src;
export const vite = viteRaw.src;
export const node = nodeRaw.src;
export const wordpress = wordpressRaw.src;
export const php = phpRaw.src;
export const express = expressRaw.src;
export const mongodb = mongodbRaw.src;
export const postgresql = postgresqlRaw.src;
export const supabase = supabaseRaw.src;
export const jest = jestRaw.src;
export const playwright = playwrightRaw.src;
export const testingLibrary = testingLibraryRaw.src;
export const git = gitRaw.src;
export const figma = figmaRaw.src;
export const canva = canvaRaw.src;
export const photoshop = photoshopRaw.src;
export const lifeGoats = lifeGoatsRaw.src;
// export const portfolio = portfolioRaw.src;
export const gardenGenie = gardenGenieRaw.src;
export const lightABeacon = lightABeaconRaw.src;
export const goldenKeys = goldenKeysRaw.src;
export const greekArtMap = greekArtMapRaw.src;
export const lifeGoats1 = lifeGoats1Raw.src;
export const lifeGoats2 = lifeGoats2Raw.src;
export const lifeGoats3 = lifeGoats3Raw.src;
