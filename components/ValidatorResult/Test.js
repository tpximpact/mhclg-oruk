import styles from './ValidatorResult.module.css'
import Icon from '@/components/Icon'
import { STATUS } from '@/utilities/status'
import { getColourForStatus } from '@/utilities/getColourForStatus'
import { getIconForStatus } from '@/utilities/getIconForStatus'
import Columns from '@/components/Columns'
import {Message}from './Message'

export const Test = (props) => <div className={styles.test} style={{"--statuscolor":getColourForStatus(props.data.status)}}>
    <Columns layout="15" supressTrailingSpace>
        <IconColumn {...props}/>
        <PayloadColumn {...props}/>
    </Columns>
    </div>


const IconColumn = ({data})=> <div className={styles.icon}><div className={styles.testIcon}>
<Icon
    colour='#fff'
    weight='4'
    icon={getIconForStatus(data.status)}
    size='48'
/>
</div>
<div className={styles.testText}>
<span>{data.status === STATUS.PASS ? 'PASS' : 'FAIL'}</span>
</div></div>

const PayloadColumn = ({data}) => <div className={styles.payload}>

    <h3>{data.description}?</h3>
    {
        data.messages.map(
            (message,i) => <Message key={i} data={message} />
        )
    }
    </div>