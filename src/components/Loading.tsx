import { CircleNotch } from "phosphor-react";
import evolutionGif from '../assets/evolution.gif';

export function Loading() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin"/>
    </div>
  )
}

export function LoadingGif() {
  return (
    <div className="w-80 h-80 rounded-full mx-auto">
      <img src={evolutionGif} alt="" className="w-80 h-80 rounded-full"/>
    </div>
  )
}