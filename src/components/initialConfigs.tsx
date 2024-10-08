"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function WPSInitialConfig() {
  const [config, setConfig] = useState({
    mode: "single",
    env: "local",
    agents: 2,
    money: 750000,
    land: 2,
    personality: "Neutral",
    tools: 20,
    seeds: 50,
    water: 0,
    irrigation: 0,
    emotions: true,
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setConfig((prev) => ({ ...prev, emotions: checked }));
  };

  const handleStartSimulation = () => {
    console.log("Starting simulation with config:", config);
    router.push("/pages/simulador"); // Redirigir a la interfaz principal
 
    
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          WellProdSim Initial Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="mode">Mode</Label>
            <Input
              id="mode"
              name="mode"
              value={config.mode}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <Label htmlFor="env">Environment</Label>
            <Input
              id="env"
              name="env"
              value={config.env}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="agents">Agents</Label>
            <Input
              id="agents"
              name="agents"
              type="number"
              value={config.agents}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <Label htmlFor="money">Money</Label>
            <Input
              id="money"
              name="money"
              type="number"
              value={config.money}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="land">Land</Label>
            <Input
              id="land"
              name="land"
              type="number"
              value={config.land}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <Label htmlFor="personality">Personality</Label>
            <select
              id="personality"
              name="personality"
              onChange={(e) => {
                const selectedPersonality = e.target.value;
                setConfig((prev) => ({
                  ...prev,
                  personality: selectedPersonality,
                }));
              }}
              className="border p-2 rounded"
            >
              <option value="Neutral">Neutral</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Angry">Angry</option>
              <option value="Excited">Excited</option>
            </select>
            <p className="mt-2">Selected Personality: {config.personality}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="tools">Tools</Label>
            <Input
              id="tools"
              name="tools"
              type="number"
              value={config.tools}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <Label htmlFor="seeds">Seeds</Label>
            <Input
              id="seeds"
              name="seeds"
              type="number"
              value={config.seeds}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="water">Water</Label>
            <Input
              id="water"
              name="water"
              type="number"
              value={config.water}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <Label htmlFor="irrigation">Irrigation</Label>
            <Input
              id="irrigation"
              name="irrigation"
              type="number"
              value={config.irrigation}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="emotions"
            checked={config.emotions}
            onCheckedChange={handleSwitchChange}
            className={`relative inline-flex items-center h-6 rounded-full w-11 ${
              config.emotions ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <span
              className={`${
                config.emotions ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </Switch>
          <Label htmlFor="emotions">Enable Emotions</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleStartSimulation}
          className="w-full bg-blue-500 text-black p-4 rounded"
        >
          Start Simulation
        </Button>
      </CardFooter>
    </Card>
  );
}
