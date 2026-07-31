import { useState } from "react";
import { MessageCircle, Mail, Share2, MessageSquareText } from "lucide-react";
import Modal from "./Modal";

const socials = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    description:
      "Join our WhatsApp channel for more offers and exclusive weekend special discounts, straight to your phone!",
    action: "https://wa.me/911234567890?text=Hi!%20I'd%20like%20to%20join%20Espresso%20Voila's%20WhatsApp%20channel.",
  },
  {
    id: "gmail",
    label: "Email",
    icon: Mail,
    description:
      "Subscribe via email to get our monthly newsletter with new menu items, café events, and seasonal specials.",
    action: "mailto:hello@espressovoila.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Share2,
    description:
      "Follow Espresso Voila on LinkedIn to see our journey, behind-the-scenes moments, and community events.",
    action: "https://linkedin.com",
  },
  {
    id: "sms",
    label: "SMS",
    icon: MessageSquareText,
    description:
      "Sign up for SMS alerts to be the first to know about flash discounts and limited-time café specials.",
    action: "sms:+911234567890",
  },
];

function SocialFloat() {
  const [active, setActive] = useState(null);
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);
  };

  const closeAll = () => {
    setActive(null);
    setJoined(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              className="group flex items-center gap-2 bg-coffee hover:bg-espresso text-offwhite rounded-full w-14 h-14 justify-center shadow-lg transition"
              title={s.label}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>

      {active && (
        <Modal onClose={closeAll}>
          <div className="p-6 text-center">
            <active.icon size={40} className="mx-auto mb-3 text-coffee" />
            <h3 className="text-xl font-bold text-espresso mb-2">{active.label}</h3>

            {!joined ? (
              <>
                <p className="text-espresso/80 mb-6">{active.description}</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleJoin}
                    className="bg-coffee hover:bg-espresso text-offwhite px-5 py-2 rounded-lg font-medium transition"
                  >
                    Join Now
                  </button>
                  <button
                    onClick={closeAll}
                    className="bg-latte hover:bg-latte/70 text-espresso px-5 py-2 rounded-lg font-medium transition"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-espresso font-medium mb-6">
                  Joined successfully! Open {active.label} to see and interact with us! 🎉
                </p>

                <a
                  href={active.action}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeAll}
                  className="inline-block bg-coffee hover:bg-espresso text-offwhite px-6 py-2 rounded-lg font-medium transition"
                >
                  Open {active.label}
                </a>
              </>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

export default SocialFloat;