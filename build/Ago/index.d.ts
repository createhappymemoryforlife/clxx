/// <reference types="react" />
import dayjs from 'dayjs';
export interface AgoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    date?: dayjs.ConfigType;
}
export declare function Ago(props: AgoProps): JSX.Element;
