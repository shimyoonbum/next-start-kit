import { z } from "zod";

export const settingsSchema = z.object({
  displayName: z.string().min(2, "표시 이름은 2자 이상이어야 합니다"),
  language: z.string(),
  timezone: z.string(),
  emailNotifications: z.boolean(),
  pushNotifications: z.boolean(),
  marketingEmails: z.boolean(),
});

export type SettingsInput = z.infer<typeof settingsSchema>;
