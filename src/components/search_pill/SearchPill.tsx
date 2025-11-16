import { useEffect, useRef, useState } from 'react';
import { NavLink } from "react-router";
import  IconButton  from "@mui/material/IconButton";
import  Button  from "@mui/material/Button";
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import type {Categories} from "@/types/categories";

const TRANSLATE_AMOUNT = 200;

export const SearchPill = ({
                                  categories
                              }:Categories) => {
    const [translate, setTranslate] = useState(0);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current === null) return;

        const observer = new ResizeObserver((entries) => {
            const container = entries[0]?.target; // it will return the same thing as containerRef.current;
            if (container === null) return;

            setIsLeftVisible(translate > 0);
            setIsRightVisible(
                translate + container.clientWidth < container.scrollWidth
            );
        });

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, [translate, categories]);

    return (
        <div ref={containerRef}
             style={{overflowX: "hidden", position: "relative"}}>
            <div
                style={{ transform: `translateX(-${translate}px)`, display: "flex", whiteSpace: "nowrap",
                    gap: "18px", transition: "transform", width: "max-content" }}
            >
                {categories.map((category) => (
                    <Button
                        component={NavLink}
                        to={`/search/${category.title}`}
                        variant="contained"
                        startIcon={category.icon}
                        key={category.title}
                        size="small"
                        rounded="full"
                    >
                         {category.title}
                    </Button>
                ))}
            </div>

            {/* From 50% (middle of <Button>) to 96px, add linear-gradient white-> transparent. */}
            {isLeftVisible && (
                <div
                    style={{ position: "absolute", left: 0, top: 0, width: "6em", height: "100%",
                        backgroundImage: 'linear-gradient(to right, hsla(0, 100%, 45%, 0.35), hsla(53, 100%, 50%, 0.35))', }}
                >
                    <IconButton
                        onClick={() => {
                            setTranslate((translate) => {
                                const newTranslate = translate - TRANSLATE_AMOUNT;
                                if (newTranslate <= 0) return 0;
                                return newTranslate;
                            });
                        }}
                    >
                        <ChevronLeft />
                    </IconButton>
                </div>
            )}

            {/* flex justify-end will push the button to the right */}
            {isRightVisible && (
                <div
                    style={{ position: "absolute", right: 0, top: 0, width: "6rem", height: "100%", display: "flex", justifyContent: "end",
                        backgroundImage: 'linear-gradient(to right, hsla(0, 100%, 45%, 0.35), hsla(53, 100%, 50%, 0.35))',}}
                >
                    <IconButton
                        onClick={() => {
                            setTranslate((translate) => {
                                if (containerRef.current === null) return translate;

                                const newTranslate = translate + TRANSLATE_AMOUNT;
                                const edge = containerRef.current.scrollWidth; // the entire scrollable width
                                const width = containerRef.current.clientWidth; // the current visible width on the screen

                                if (newTranslate + width >= edge) {
                                    return edge - width;
                                }
                                return newTranslate;
                            });
                        }}
                    >
                        <ChevronRight />
                    </IconButton>
                </div>
            )}
        </div>
    );
};
