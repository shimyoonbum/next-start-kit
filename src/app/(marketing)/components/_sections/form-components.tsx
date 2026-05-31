"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export function FormComponents() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="font-semibold">Input</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
          <div className="space-y-2">
            <Label htmlFor="demo-email">이메일</Label>
            <Input id="demo-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-disabled">비활성화</Label>
            <Input id="demo-disabled" placeholder="비활성화된 입력" disabled />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Textarea</h3>
        <div className="max-w-xl space-y-2">
          <Label htmlFor="demo-textarea">메시지</Label>
          <Textarea id="demo-textarea" placeholder="내용을 입력하세요..." />
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Select</h3>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="옵션 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">옵션 1</SelectItem>
            <SelectItem value="option2">옵션 2</SelectItem>
            <SelectItem value="option3">옵션 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Checkbox</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="cb1" defaultChecked />
            <Label htmlFor="cb1">선택됨</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cb2" />
            <Label htmlFor="cb2">미선택</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cb3" disabled />
            <Label htmlFor="cb3">비활성화</Label>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">RadioGroup</h3>
        <RadioGroup defaultValue="option1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="r1" />
            <Label htmlFor="r1">옵션 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="r2" />
            <Label htmlFor="r2">옵션 2</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Switch</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch id="sw1" defaultChecked />
            <Label htmlFor="sw1">활성화됨</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sw2" />
            <Label htmlFor="sw2">비활성화됨</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
