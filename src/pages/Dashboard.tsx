
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, Star, Activity } from "lucide-react";

const stats = [
  {
    title: "New Users",
    value: "2,345",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Updated Ingredients",
    value: "148",
    change: "+5.2%",
    icon: Package,
  },
  {
    title: "Modified Products",
    value: "86",
    change: "+2.8%",
    icon: Star,
  },
  {
    title: "Active Sessions",
    value: "324",
    change: "+18.7%",
    icon: Activity,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back! Here's what's happening with your products today.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <p
                  className={`mt-2 text-xs ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change} from last week
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
