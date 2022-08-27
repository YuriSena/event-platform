import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

export function EventPlaceholder() {

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="bg-gray-700 h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <div className="bg-gray-600 flex flex-1 w-full h-full flex-col items-center justify-center">
            <h1 className="text-gray-200 text-6xl">
            Fala dev!
            </h1>
            <span className="text-green-500 ">Clique em uma das aulas ao lado para iniciar os estudos </span>
          </div>
        </div>
      </div>
    </div>
  ); 
}