import React from "react";
import ChameleonEngine from "../../engine/ChameleonEngine";

function useEngine(canvasRef : React.RefObject<HTMLCanvasElement>,
                   gamePath : string): void
{
    React.useEffect((): void =>
    {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;

        const engine = new ChameleonEngine();

        const startEngine = async () =>
        {
            await engine.start(gamePath, canvasRef.current);
            return (): Promise<void> => engine.exit();
        }
    }, [canvasRef, gamePath]);
}

function GameCanvas(): React.JSX.Element
{
    const canvasRef: React.RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(null);
    useEngine(canvasRef, "/Assets/packages/games/2D_Exploration");
    return <canvas ref={canvasRef} />;
}

export default GameCanvas;