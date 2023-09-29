import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../user/user";
import { HoraireEntity } from "../horaire/horaire";
import { CourEntity } from "../cour/cour";
import { DateCourEntity } from "../dateCour/dateCour";
import { SeanceUserEntity } from "../seance_user/seance-user";

@Entity('Seance')
export class SeanceEntity{
    @PrimaryGeneratedColumn()
    id: number;
  @ManyToOne(() => HoraireEntity, (horaire) => horaire.seances)
  horaire: HoraireEntity;

  @ManyToOne(() => CourEntity, (cour) => cour.seances)
  cour: CourEntity;
  @ManyToOne(() => DateCourEntity, (dateCour) => dateCour.seances)
  dateCour: DateCourEntity;
  @OneToMany(() => SeanceUserEntity, (seanceUser) => seanceUser.seance)
  seanceUsers: SeanceUserEntity[];
}