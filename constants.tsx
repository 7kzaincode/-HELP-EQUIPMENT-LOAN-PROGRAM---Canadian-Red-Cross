
import { Equipment, Translation } from './types';

export const TRANSLATIONS: Translation = {
  header_title: { en: 'Canadian Red Cross', fr: 'Croix-Rouge canadienne' },
  header_subtitle: { en: 'HELP Program', fr: 'Programme de prêt d’équipement' },
  step_1: { en: 'Equipment', fr: 'Équipement' },
  step_2: { en: 'Patient Info', fr: 'Infos Patient' },
  step_3: { en: 'Instructions', fr: 'Instructions' },
  select_title: { en: 'Equipment Selection', fr: 'Sélection d’équipement' },
  select_desc: { en: 'Select the items you are requesting for the patient.', fr: 'Sélectionnez les articles que vous demandez pour le patient.' },
  btn_next_info: { en: 'Next: Patient Information', fr: 'Suivant : Infos Patient' },
  btn_generate: { en: 'Generate Instructions', fr: 'Générer les instructions' },
  btn_back: { en: 'Go Back', fr: 'Retour' },
  patient_title: { en: 'Patient Profile', fr: 'Profil du patient' },
  patient_desc: { en: 'Enter height and weight to ensure equipment safety and correct sizing.', fr: 'Entrez la taille et le poids pour assurer la sécurité.' },
  label_height: { en: 'Patient Height', fr: 'Taille du patient' },
  label_weight: { en: 'Patient Weight', fr: 'Poids du patient' },
  result_title: { en: 'Patient Guidance Pack', fr: 'Dossier de conseils' },
  result_desc: { en: 'Custom instructions and sizing based on patient profile.', fr: 'Instructions personnalisées selon le profil du patient.' },
  btn_restart: { en: 'New Request', fr: 'Nouvelle demande' },
  weight_verified: { en: 'Safe for Weight', fr: 'Poids sécuritaire' },
  weight_warning: { en: 'Weight Capacity Warning', fr: 'Avertissement de capacité' },
  label_sizing: { en: 'Adjusted Height', fr: 'Hauteur ajustée' },
  label_max_load: { en: 'Max Capacity', fr: 'Capacité maximale' },
  label_sizing_note: { en: 'Sizing Guide:', fr: 'Guide de taille :' },
  btn_view_pdf: { en: 'Download Instructions', fr: 'Télécharger les instructions' },
  btn_share: { en: 'Share Results', fr: 'Partager les résultats' },
  disclaimer_title: { en: 'Clinical Note', fr: 'Note clinique' },
  disclaimer_body: { en: 'These guides assist with setup but do not replace professional fitting by a Physical or Occupational Therapist.', fr: 'Ces guides aident à l\'installation mais ne remplacent pas un ajustement professionnel.' },
  cat_all: { en: 'All Items', fr: 'Tous les articles' },
  cat_mobility: { en: 'Walking & Mobility', fr: 'Mobilité' },
  cat_bathroom: { en: 'Bathroom & Hygiene', fr: 'Salle de bain' },
  cat_bedroom: { en: 'Bedroom & Seating', fr: 'Chambre et siège' }
};

export const EQUIPMENT_DATA: Equipment[] = [
  // MOBILITY
  {
    id: 'cane',
    category: 'mobility',
    name: { en: 'Cane', fr: 'Canne' },
    description: { en: 'Single-point support for minor balance issues.', fr: 'Support à un point pour les légers problèmes d’équilibre.' },
    imageUrl: 'https://picsum.photos/seed/cane/400/300',
    pdfUrl: '/assets/pdfs/cane.pdf',
    maxWeightLbs: 250,
    sizingGuide: { en: 'Adjust handle to the crease of the patient\'s wrist.', fr: 'Ajustez la poignée au pli du poignet du patient.' }
  },
  {
    id: 'crutches-axilla',
    category: 'mobility',
    name: { en: 'Crutches (Axilla)', fr: 'Béquilles axillaires' },
    description: { en: 'Underarm support for non-weight bearing injury.', fr: 'Soutien sous-axillaire pour blessures sans mise en charge.' },
    imageUrl: 'https://picsum.photos/seed/crutches/400/300',
    pdfUrl: '/assets/pdfs/crutches-axilla.pdf',
    maxWeightLbs: 300,
    sizingGuide: { en: 'Leave 2-3 inches space between armpit and top pad.', fr: 'Laissez 2-3 pouces entre l’aisselle et le coussin.' }
  },
  {
    id: 'forearm-crutches',
    category: 'mobility',
    name: { en: 'Forearm Crutches', fr: 'Béquilles de coude' },
    description: { en: 'Forearm support for long-term mobility needs.', fr: 'Soutien de l’avant-bras pour besoins de mobilité prolongés.' },
    imageUrl: 'https://picsum.photos/seed/forearm/400/300',
    pdfUrl: '/assets/pdfs/forearm-crutches.pdf',
    maxWeightLbs: 300,
    sizingGuide: { en: 'Arm cuffs should sit 1-2 inches below the elbow.', fr: 'Les brassards doivent être 1-2 pouces sous le coude.' }
  },
  {
    id: 'walker',
    category: 'mobility',
    name: { en: 'Walker', fr: 'Déambulateur' },
    description: { en: 'Standard folding walker for maximum stability.', fr: 'Cadre de marche pliant standard.' },
    imageUrl: 'https://picsum.photos/seed/walker/400/300',
    pdfUrl: '/assets/pdfs/walker.pdf',
    maxWeightLbs: 300,
    sizingGuide: { en: 'Hand grips should be level with the wrists.', fr: 'Poignées au niveau des poignets.' }
  },
  {
    id: 'rollator',
    category: 'mobility',
    name: { en: 'Rollator (4-Wheeled Walker)', fr: 'Rollator à 4 roues' },
    description: { en: 'Includes wheels, brakes, and a seat for resting.', fr: 'Comprend roues, freins et un siège pour le repos.' },
    imageUrl: 'https://picsum.photos/seed/rollator/400/300',
    pdfUrl: '/assets/pdfs/rollator.pdf',
    maxWeightLbs: 300,
    sizingGuide: { en: 'Lock brakes completely before sitting down.', fr: 'Verrouillez les freins avant de vous asseoir.' }
  },
  {
    id: 'wheelchair',
    category: 'mobility',
    name: { en: 'Wheelchair', fr: 'Fauteuil roulant' },
    description: { en: 'Manual transit wheelchair with footrests.', fr: 'Fauteuil roulant manuel avec repose-pieds.' },
    imageUrl: 'https://picsum.photos/seed/wheelchair/400/300',
    pdfUrl: '/assets/pdfs/wheelchair.pdf',
    maxWeightLbs: 250,
    sizingGuide: { en: 'Ensure the patient’s hips fit comfortably within the seat.', fr: 'Hanches confortables dans le siège.' }
  },

  // BATHROOM & HYGIENE
  {
    id: 'bath-board',
    category: 'bathroom',
    name: { en: 'Bath Board', fr: 'Planche de bain' },
    description: { en: 'Secure seat that rests across the top of the tub.', fr: 'Siège sécurisé reposant sur le dessus de la baignoire.' },
    imageUrl: 'https://picsum.photos/seed/bathboard/400/300',
    pdfUrl: '/assets/pdfs/bath-board.pdf',
    maxWeightLbs: 250,
    sizingGuide: { en: 'Ensure the board is locked onto both tub edges.', fr: 'Planche verrouillée sur les deux bords.' }
  },
  {
    id: 'bath-transfer-bench',
    category: 'bathroom',
    name: { en: 'Bath Transfer Bench', fr: 'Banc de transfert de bain' },
    description: { en: 'Helps users transition into the tub while seated.', fr: 'Aide à entrer dans le bain en position assise.' },
    imageUrl: 'https://picsum.photos/seed/bench/400/300',
    pdfUrl: '/assets/pdfs/bath-transfer-bench.pdf',
    maxWeightLbs: 300,
    sizingGuide: { en: 'Adjust legs so the bench is level and stable.', fr: 'Ajustez les pieds pour la stabilité.' }
  },
  {
    id: 'bath-shower-chair',
    category: 'bathroom',
    name: { en: 'Bath Shower Chair', fr: 'Chaise de douche' },
    description: { en: 'Portable stool for use inside the tub or shower.', fr: 'Tabouret portable pour douche ou bain.' },
    imageUrl: 'https://picsum.photos/seed/stool/400/300',
    pdfUrl: '/assets/pdfs/bath-shower-chair.pdf',
    maxWeightLbs: 300,
    sizingGuide: { en: 'Check that all rubber feet are in good condition.', fr: 'Vérifiez les embouts en caoutchouc.' }
  },
  {
    id: 'bath-tub-grab-bar',
    category: 'bathroom',
    name: { en: 'Bath Tub Grab Bar', fr: 'Barre d’appui de baignoire' },
    description: { en: 'Mounts to the tub wall for extra balance.', fr: 'Se monte sur le mur de la baignoire.' },
    imageUrl: 'https://picsum.photos/seed/grab/400/300',
    pdfUrl: '/assets/pdfs/bath-tub-grab-bar.pdf',
    maxWeightLbs: 250,
    sizingGuide: { en: 'Not intended to support full body weight.', fr: 'Ne supporte pas tout le poids du corps.' }
  },
  {
    id: 'raised-toilet-seat',
    category: 'bathroom',
    name: { en: 'Raised Toilet Seat', fr: 'Siège de toilette surélevé' },
    description: { en: 'Reduces the distance needed to sit or stand.', fr: 'Réduit la distance pour s’asseoir ou se lever.' },
    imageUrl: 'https://picsum.photos/seed/raised/400/300',
    pdfUrl: '/assets/pdfs/raised-toilet-seat.pdf',
    maxWeightLbs: 350,
    sizingGuide: { en: 'Ensure the locking knob is tightened securely.', fr: 'Serrez bien le bouton de verrouillage.' }
  },
  {
    id: 'toilet-safety-frame',
    category: 'bathroom',
    name: { en: 'Toilet Safety Frame', fr: 'Cadre de sécurité de toilette' },
    description: { en: 'Side handles for stability when using the toilet.', fr: 'Poignées latérales pour la stabilité.' },
    imageUrl: 'https://picsum.photos/seed/frame/400/300',
    pdfUrl: '/assets/pdfs/toilet-safety-frame.pdf',
    maxWeightLbs: 250,
    sizingGuide: { en: 'Mounts directly to the toilet seat bolts.', fr: 'Se fixe aux boulons du siège.' }
  },
  {
    id: 'toilet-seat-elevator',
    category: 'bathroom',
    name: { en: 'Toilet Seat Elevator', fr: 'Élévateur de siège de toilette' },
    description: { en: 'Permanent-style riser for elongated toilets.', fr: 'Surélévateur permanent pour toilettes allongées.' },
    imageUrl: 'https://picsum.photos/seed/elevator/400/300',
    pdfUrl: '/assets/pdfs/toilet-seat-elevator.pdf',
    maxWeightLbs: 300,
    sizingGuide: { en: 'Fits between the toilet bowl and existing seat.', fr: 'S’installe sous le siège existant.' }
  },

  // BEDROOM & SEATING
  {
    id: 'bed-assist',
    category: 'bedroom',
    name: { en: 'Bed Assist Handle', fr: 'Barre d’appui de lit' },
    description: { en: 'Sturdy handle for getting in and out of bed.', fr: 'Poignée robuste pour entrer/sortir du lit.' },
    imageUrl: 'https://picsum.photos/seed/bed/400/300',
    pdfUrl: '/assets/pdfs/bed-assist.pdf',
    maxWeightLbs: 250,
    sizingGuide: { en: 'Secure safety strap to the opposite bed frame.', fr: 'Fixez la sangle au cadre de lit opposé.' }
  },
  {
    id: 'bed-cradle',
    category: 'bedroom',
    name: { en: 'Bed Cradle', fr: 'Arceau de lit' },
    description: { en: 'Metal frame to keep linens off the feet.', fr: 'Cadre métallique pour les draps.' },
    imageUrl: 'https://picsum.photos/seed/cradle/400/300',
    pdfUrl: '/assets/pdfs/bed-cradle.pdf',
    maxWeightLbs: 100,
    sizingGuide: { en: 'Slides under the mattress for stability.', fr: 'Se glisse sous le matelas.' }
  },
  {
    id: 'commode',
    category: 'bedroom',
    name: { en: 'Commode', fr: 'Commode' },
    description: { en: 'Portable toilet for use where access is limited.', fr: 'Toilettes portables pour accès limité.' },
    imageUrl: 'https://picsum.photos/seed/commode/400/300',
    pdfUrl: '/assets/pdfs/commode.pdf',
    maxWeightLbs: 350,
    sizingGuide: { en: 'Bucket must be cleaned and disinfected daily.', fr: 'Seau à nettoyer quotidiennement.' }
  },
  {
    id: 'iv-pole',
    category: 'bedroom',
    name: { en: 'IV Pole', fr: 'Poteau de perfusion' },
    description: { en: 'Stand for intravenous bags and infusions.', fr: 'Support pour perfusions IV.' },
    imageUrl: 'https://picsum.photos/seed/iv/400/300',
    pdfUrl: '/assets/pdfs/iv-pole.pdf',
    maxWeightLbs: 50,
    sizingGuide: { en: 'Keep the base clear of tripping hazards.', fr: 'Évitez les risques de trébuchement.' }
  },
  {
    id: 'wheelchair-cushion',
    category: 'bedroom',
    name: { en: 'Foam Wheelchair Cushion', fr: 'Coussin en mousse pour fauteuil' },
    description: { en: 'Pressure reduction for seated comfort.', fr: 'Réduction de pression pour le confort assis.' },
    imageUrl: 'https://picsum.photos/seed/cushion/400/300',
    pdfUrl: '/assets/pdfs/wheelchair-cushion.pdf',
    maxWeightLbs: 250,
    sizingGuide: { en: 'Place the zipper side at the rear of the seat.', fr: 'Fermeture éclair à l’arrière.' }
  }
];
