import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./Card"
import { ChevronDownIcon } from "lucide-react"
import { Label } from "./Label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "./Dropdown"
import { Button } from "./Button"
import { Switch } from "./Switch"

export default function ControlCenter() {
    const [coolerBoost, setCoolerBoost] = useState(false)
    const [shiftMode, setShiftMode] = useState("eco")
    const [fanMode, setFanMode] = useState("auto")
    const [batteryMode, setBatteryMode] = useState("medium")

    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.controller.sendCommand("toggle_cooler_boost")
    }, [coolerBoost])

    return <Card className="w-full h-screen">
    <CardHeader>
      <CardTitle>m-ctrl</CardTitle>
      {/* <CardDescription>Optimize your laptop's performance and power.</CardDescription> */}
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="cooler-boost">Cooler Boost</Label>
          <Switch id="cooler-boost" checked={coolerBoost} onCheckedChange={setCoolerBoost} />
        </div>
        <p className="text-sm text-muted-foreground">Increase fan speed for better cooling.</p>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="shift-mode">Shift Mode</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-4">
                {shiftMode}
                <ChevronDownIcon className="ml-2 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={shiftMode} onValueChange={setShiftMode}>
                <DropdownMenuRadioItem value="eco">Eco</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="turbo">Turbo</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="comfort">Comfort</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground">Choose a performance mode for your laptop.</p>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="fan-mode">Fan Mode</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-4">
                {fanMode}
                <ChevronDownIcon className="ml-2 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={fanMode} onValueChange={setFanMode}>
                <DropdownMenuRadioItem value="auto">Auto</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="silent">Silent</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="advanced">Advanced</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground">Adjust the fan settings for your laptop.</p>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="battery-mode">Battery Mode</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-4">
                {batteryMode}
                <ChevronDownIcon className="ml-2 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={batteryMode} onValueChange={setBatteryMode}>
                <DropdownMenuRadioItem value="max">Max</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="min">Min</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground">Choose a battery mode to optimize your laptop's battery life.</p>
      </div>
    </CardContent>
  </Card>
}