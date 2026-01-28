interface DebugProps {
  data: any
}

export const Debug = ({ data }: DebugProps) => <pre>{JSON.stringify(data, null, 2)}</pre>
